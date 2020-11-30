import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  toggle = true;
  savedChanges = false;
  error = false;
  errorMessage = '';
  dataLoading = false;
  private querySubscription;
  members = [];

  // profileUrl: Observable<string | null>;
  profileUrl: string;
  myDocId;
  counter = 0;
  myDocData;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getFilteredData(filters): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getFilteredProducts('product', filters)
      .subscribe(members => {
          this.members = members;
          this.dataLoading = false;
        },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        });
  }

  getData(): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getProducts('product')
      .subscribe(members => {
          this.members = members;
          this.dataLoading = false;
        },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        });
  }

  getPic(picId): void {
    this.profileUrl = '';
  }

  showDetails(item): void {
    this.counter = 0;
    this.myDocData = item;
    this.getPic(item.path);
    this.dataLoading = true;
    const data = item;
    this.querySubscription = this.backendService.updateShoppingInterest('interests', data)
      .subscribe(members => {
          this.members = members;
          this.dataLoading = false;
          this.savedChanges = true;
        },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        });
  }

  calcProd(filter): void {
    if (filter === 'add') {
      this.counter = this.counter + 1;
    } else {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
      }
    }
  }

  addToCart(item, counter): void {
    this.dataLoading = true;
    const data = item;
    data.qty = counter;
    this.querySubscription = this.backendService.updateShoppingCart('cart', data)
      .subscribe(members => {
          this.dataLoading = false;
          this.counter = 0;
          this.savedChanges = true;
        },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}

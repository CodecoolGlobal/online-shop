import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-admincarts',
  templateUrl: './admincarts.component.html',
  styleUrls: ['./admincarts.component.css']
})
export class AdmincartsComponent implements OnInit, OnDestroy {

  toggleField: string;
  dataSource: MatTableDataSource<any>;
  members: any[];
  myDocData: any;

  savedChanges = false;
  error = false;
  errorMessage = '';
  dataLoading = false;
  private querySubscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.toggleField = 'searchMode';
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggle(filter?): void {
    if (!filter) {
      filter = 'searchMode';
    } else {
      filter = filter;
    }
    this.toggleField = filter;
  }

  getData(): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getProducts('cart')
      .subscribe(members => {
          this.members = members;
          this.dataSource = new MatTableDataSource(members);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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

  getFilteredData(filters): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getFilteredProducts('cart', filters)
      .subscribe(members => {
          this.members = members;
          this.dataSource = new MatTableDataSource(members);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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

  setData(formData): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.setProducts('cart', formData)
      .subscribe(members => {
          if (members) {
            this.savedChanges = true;
            this.dataLoading = false;
          }
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

  updateData(formData): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.updateProducts('cart', formData)
      .subscribe(members => {
          if (members) {
            this.savedChanges = true;
            this.dataLoading = false;
          }
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

  getDoc(docId): void {
    this.dataLoading = true;
    this.querySubscription = this.backendService.getOneProductDoc('cart', docId)
      .subscribe(res => {
          if (res) {
            this.myDocData = res;
            this.toggle('editMode');
            this.dataLoading = false;
          }
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

  delDoc(docId): void {
    if (confirm('Are you sure You want to delete this record?')) {
      this.dataLoading = true;
      this.querySubscription = this.backendService.delOneProductDoc('cart', docId)
        .subscribe(res => {
            if (res) {
              this.toggle('searchMode');
              this.dataLoading = false;
            }
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
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}

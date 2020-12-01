import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit, OnDestroy {

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
    this.querySubscription = this.backendService.getProducts('orders')
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
    this.querySubscription = this.backendService.getFilteredProducts('orders', filters)
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
    this.querySubscription = this.backendService.setProducts('orders', formData)
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
    this.querySubscription = this.backendService.updateProducts('orders', formData)
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
    this.querySubscription = this.backendService.getOneProductDoc('orders', docId)
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
      this.querySubscription = this.backendService.delOneProductDoc('orders', docId)
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


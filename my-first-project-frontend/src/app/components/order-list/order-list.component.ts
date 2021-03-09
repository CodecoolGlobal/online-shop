import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../services/api.service';
import {Order} from '../../models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.orders$ = this.api.getOrders();
  }

  deleteOrder(id): void {
    this.api.deleteOrderById(id).subscribe(res => {
      alert('Order succesfully deleted');
      this.orders$ = this.api.getOrders();
    });
  }

}

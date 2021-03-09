import {OrderStatus} from './order-status.enum';
import {SimpleClient} from './simple-client';

export interface Order {
  orderId: string;
  name: string;
  status: OrderStatus;
  creationDate: string;
  client: SimpleClient;
}

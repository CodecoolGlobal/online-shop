import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {
  }

  getConfig(): object {
    return environment.social;
  }

  getCartTotal(): Observable<any> {
    const fakeResponse = '10';
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  getUserStatus(): Observable<any> {
    const fakeResponse = true;
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  getProducts(collType): Observable<any> {
    const fakeResponse = [{
      category: 'test', scategory: 'test', name: 'Product Name', price: '300', _id: '123'
    }];
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  getFilteredProducts(collType, filters): Observable<any> {
    const fakeResponse = [{
      category: 'test', scategory: 'test', name: 'Product Name', price: '300', _id: '123'
    }];
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  setProducts(collType, filters): Observable<any> {
    const fakeResponse = true;
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  updateProducts(collType, filters): Observable<any> {
    const fakeResponse = true;
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  getOneProductDoc(collType, docId): Observable<any> {
    const fakeResponse = {
      category: 'test', scategory: 'test', name: 'Product Name', price: '300', _id: '123'
    };
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  delOneProductDoc(collType, docId): Observable<any> {
    const fakeResponse = true;
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  updateShoppingInterest(collType, data): Observable<any> {
    const fakeResponse = true;
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }

  updateShoppingCart(collType, data): Observable<any> {
    const fakeResponse = true;
    return new Observable<any>((observer => {
      setTimeout(() => {
        observer.next(fakeResponse);
      }, 2000);
    }));
  }
}

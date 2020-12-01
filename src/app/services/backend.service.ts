import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {observable, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public afAuth: AngularFireAuth) {
  }

  getConfig(): object {
    return environment.social;
  }

  login(loginType, formData?): ReturnType<firebase.auth.Auth['signInWithEmailAndPassword' | 'signInWithRedirect']> {
    if (formData) {
      return this.afAuth.signInWithEmailAndPassword(formData.email, formData.password);
    } else {
      let loginMethod;
      if (loginType === 'GOOGLE') {
        loginMethod = new firebase.auth.GoogleAuthProvider();
      }
      return this.afAuth.signInWithRedirect(loginMethod);
    }
  }

  redirectLogin(): ReturnType<firebase.auth.Auth['getRedirectResult']> {
    return this.afAuth.getRedirectResult();
  }

  logout(): ReturnType<firebase.auth.Auth['signOut']> {
    return this.afAuth.signOut();
  }

  isUserLoggedIn(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  // fake functions for testing purposes only!
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

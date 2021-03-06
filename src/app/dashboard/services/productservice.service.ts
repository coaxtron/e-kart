import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  delete(id: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  // getAll() {
  //   return this.db.list('/products')
  //   .snapshotChanges().pipe(
  //     map(actions =>
  //       actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //     )
  //   );
  // }


  getAll() {
    return this.db.list('/products/').valueChanges();
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  detele(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}

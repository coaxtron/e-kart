import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  productList: AngularFireList<any>;
array = [];

  constructor(private db: AngularFireDatabase) {
    this.productList = this.db.list('/categories');
    this.productList.snapshotChanges().subscribe(
list => {
this.array = list.map(item => {
return {
$key : item.key,
...item.payload.val()
};
});
}
);
   }

  // getCategories(){
  //   return this.db.list('/categories');

  // }
}

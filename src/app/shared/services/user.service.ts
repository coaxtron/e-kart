import { Injectable } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user:firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // get(uid: string): FirebaseObjectObservable<AppUser> {
  //   return this.db.object('/users/' + uid);
  // }
}
// this.todoCollectionRef.doc(todo.id).update({ completed: !todo.completed });

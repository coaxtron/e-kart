import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'src/app/shared/models/app-user';
import { switchMap } from 'rxjs/internal/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute,private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    logout(){
      this.afAuth.signOut();
    }
    get appUser$() : Observable<AppUser>{
      return this.user$
      .pipe(switchMap(user => {
        if(user) return  this.userService.get(user.uid).valueChanges();

        // tslint:disable-next-line: deprecation
        return of(null);
      }))
    }
}

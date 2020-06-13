import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';



@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthserviceService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
  }
}

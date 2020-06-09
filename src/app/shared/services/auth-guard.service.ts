import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthserviceService, private router:Router) { }

  canActivate(route, state: RouterStateSnapshot){
   return this.auth.user$.pipe(map(user =>{
      if(user) return true;

      this.router.navigate(['/auth/login'],{queryParams: { returnUrl: state.url}} );
      return false;
    }));
  }
}


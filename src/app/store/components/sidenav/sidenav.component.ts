import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output()
  sidenav = new EventEmitter();

    profileMenu = [
      {
        title: 'My Profile',
        link: '/account/profile',
        icon: 'person'
      },
    {
      title: 'Saved Cards',
      link: '/account/carddetails',
      icon:'account_balance'
    },
    {
      title: 'My Address',
      link: '/account/address',
      icon: 'border_color'
    },
    {
      title: 'My Orders',
      link: '/account/orders',
      icon: 'next_week'
    },
    {
      title: 'My Cart',
      link: '/shopping-cart',
      icon: 'add_shopping_cart'
    },
    {
      title: 'My Wishlist',
      link: '/account/wishlist',
      icon:'shopping_cart'
    },

  ];
  myStuff = [
    {
      title: 'My Reviews',
      link: '/account/reviews',
      icon: 'rate_review'
    },
    {
      title: 'My Rewards',
      link: '/account/rewards',
      icon: 'rate_review'
    },
  ];
  toggelSidenav() {
    this.sidenav.emit('toggel');
  }
  appUser : AppUser;
  constructor(private router: Router,public auth: AuthserviceService,private user :UserService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }


  ngOnInit(): void {
  }

  goToMyProfile(){
    this.toggelSidenav();
    this.router.navigate(['myprofile']);
  }
  logout(){
    this.auth.logout();
  }

}

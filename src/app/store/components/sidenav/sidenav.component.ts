import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';

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
      link: '/myprofile/profile',
      icon: 'person'
    },
    {
      title: 'Saved Cards',
      link: '/myprofile/carddetails',
      icon:'account_balance'
    },
    {
      title: 'My Address',
      link: '/myprofile/address',
      icon: 'border_color'
    },
    {
      title: 'My Orders',
      link: '/myprofile/orders',
      icon: 'next_week'
    },
    {
      title: 'My Cart',
      link: '/shopping-cart',
      icon: 'add_shopping_cart'
    },
    {
      title: 'My Wishlist',
      link: '/myprofile/wishlist',
      icon:'shopping_cart'
    },

  ];
  myStuff = [
    {
      title: 'My Reviews',
      link: '/myprofile/reviews',
      icon: 'rate_review'
    },
    {
      title: 'My Rewards',
      link: '/myprofile/rewards',
      icon: 'rate_review'
    },
  ];
  toggelSidenav() {
    this.sidenav.emit('toggel');
  }
  constructor(private router: Router,public auth: AuthserviceService) { }
  user:firebase.User;

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

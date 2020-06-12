import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from './shared/services/user.service';
import { AuthserviceService } from './auth/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer', { static: false }) drawer: MatSidenav;
  title = 'e-comm';

  sideNavMenu = [
    {
      title: 'home',
      link: '/home',
    },
    {
      title: 'products',
      link: '/products',
    },
    {
      title: 'images',
      link: '',
    },
    {
      title: 'contact-us',
      link: '',
    },
  ];

  toggelNavbar() {
    this.drawer.toggle();
  }

  constructor(
    private userService: UserService,
    public auth: AuthserviceService,
    router: Router
  ) {
    auth.user$.subscribe((user) => {
      if (!user) return;

      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}

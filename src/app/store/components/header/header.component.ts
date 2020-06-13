import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fade } from '../../../../animations';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';
import { AppUser } from 'src/app/shared/models/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   fade,

  //   trigger('top-header', [
  //     transition(':enter', [
  //       style({ height: 0, opacity: 0 }),
  //       animate('2s ease-out'),
  //     ]),

  //     transition(
  //       ':leave',
  //       animate('0.2s ease-in', style({ height: 0, opacity: 0 }))
  //     ),
  //   ]),

  //   trigger('side-nav', [
  //     state('closed', style({ transform: 'translateX(-105%)' })),
  //     state('opened', style({ transform: 'translateX(0px)' })),

  //     transition('closed <=> opened', animate('0.2s ease-in-out')),
  //   ]),
  // ],
})
export class HeaderComponent implements OnInit {
  loadingEnable: boolean;
  sidenavEnable = false;
  // user: firebase.User;
  appUser : AppUser;

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor(public auth: AuthserviceService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}

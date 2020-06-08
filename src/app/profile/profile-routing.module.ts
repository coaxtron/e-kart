import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageAddressComponent } from './components/manage-address/manage-address.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReviewsRatingComponent } from './components/reviews-rating/reviews-rating.component';
import { SaveCardsComponent } from './components/save-cards/save-cards.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MyRewardsComponent } from './components/my-rewards/my-rewards.component';

const routes: Routes = [
  {
    path :'account' , component : ProfileComponent,
    children:[
      {
        path: 'profile',
        component: ProfileInfoComponent
      },
      {
        path: 'address',
        component: ManageAddressComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'reviews',
        component: ReviewsRatingComponent
      },
      {
        path: 'carddetails',
        component: SaveCardsComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'rewards',
        component: MyRewardsComponent
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }

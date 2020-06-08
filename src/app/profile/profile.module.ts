import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { ManageAddressComponent } from './components/manage-address/manage-address.component';
import { MyRewardsComponent } from './components/my-rewards/my-rewards.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReviewsRatingComponent } from './components/reviews-rating/reviews-rating.component';
import { SaveCardsComponent } from './components/save-cards/save-cards.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProfileComponent,
    ManageAddressComponent,
    MyRewardsComponent,
    NotificationsComponent,
    ReviewsRatingComponent,
    SaveCardsComponent,
    ShoppingCartComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatIconModule,
    FlexLayoutModule,
  ],
})
export class ProfileModule {}

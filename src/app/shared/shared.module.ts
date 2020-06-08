import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PTileComponent } from './components/p-tile/p-tile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';



@NgModule({
  declarations: [PTileComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule
  ],
  exports:[PTileComponent],
  providers:[UserService,
  AuthGuardService]
})
export class SharedModule { }

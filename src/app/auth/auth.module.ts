import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthserviceService } from './services/authservice.service';



@NgModule({
  declarations: [LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
     FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers : [
    AuthserviceService
  ],
})
export class AuthModule { }

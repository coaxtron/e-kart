import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { StoreRoutingModule } from './store/store-routing.module';

import { StoreModule } from './store/store.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    DashboardRoutingModule,
    ProfileRoutingModule,
    SharedRoutingModule,
    StoreRoutingModule,
    StoreModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

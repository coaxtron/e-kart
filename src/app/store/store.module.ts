import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { StoreRoutingModule } from './store-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent,
    SliderComponent,
    ProductsComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    // DashboardModule
  ],
  exports: [HeaderComponent, SidenavComponent],
})
export class StoreModule {
  static forRoot(arg0: {
    IDBNoWrap: boolean;
  }):
    | any[]
    | import('@angular/core').Type<any>
    | import('@angular/core').ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}

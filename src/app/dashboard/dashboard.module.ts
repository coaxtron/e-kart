import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { CategoryService } from './services/category.service';
import {  FormsModule, NgModel } from '@angular/forms';
import { ProductserviceService } from './services/productservice.service';

@NgModule({
  declarations: [AdminDashboardComponent, AddProductComponent, ManageOrderComponent, ProductFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    // NgModel,
    FormsModule
  ],
  providers : [
  CategoryService,ProductserviceService
  ],
})
export class DashboardModule { }

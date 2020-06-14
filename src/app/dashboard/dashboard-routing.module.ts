import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminAuthGuardService } from '../shared/services/admin-auth-guard.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path :'dashboard' , component : AdminDashboardComponent,
    children:[
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'orders',
        component: ManageOrderComponent
      },
       {
        path: 'product-new',
        component: ProductFormComponent
      },
      {
        path: '',
        redirectTo: 'add-product',
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
export class DashboardRoutingModule { }

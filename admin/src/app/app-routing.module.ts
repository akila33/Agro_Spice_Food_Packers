import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './menus/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ManageAdminComponent } from './menus/manage-admin/manage-admin.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageEmployeeComponent } from './menus/manage-employee/manage-employee.component';
import { AddCategoryComponent } from './menus/add-category/add-category.component';
import { AddProductComponent } from './menus/add-product/add-product.component';
import { MyProductsComponent } from './menus/my-products/my-products.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'manageEmployee',component:ManageEmployeeComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'customers',component:ManageCustomersComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'login',component:LoginComponent
  },

  {
    path:'add-product',component:AddProductComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'add-category',component:AddCategoryComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'view',component:MyProductsComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

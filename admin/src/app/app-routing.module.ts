import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEmployerComponent } from './menus/manage-employer/manage-employer.component';
import { HomeComponent } from './menus/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ProductComponent } from './menus/product/product.component';
import { CustomersComponent } from './menus/customers/customers.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'manageEmployer',component:ManageEmployerComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'product',component:ProductComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'customers',component:CustomersComponent,
    canActivate: [AuthGuard]
  },

  {
    path:'login',component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

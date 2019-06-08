//app-routing.module.ts- Module which handles various routes in  learning client application ///

//including required services and modules 
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
>>>>>>> e86f4600e85233f6f3219e4e7e021bb58faddcf4
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { MyordersComponent} from './myorders/myorders.component';
import { OrderdetailsComponent} from './orderdetails/orderdetails.component';
<<<<<<< HEAD
=======
import { RecipesComponent} from './recipes/recipes.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { AboutUsComponent} from './about-us/about-us.component';
<<<<<<< HEAD
>>>>>>> e86f4600e85233f6f3219e4e7e021bb58faddcf4
=======
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
>>>>>>> 034cd3dbecf75126c1be90b53d4afda1f04b9d09

import { AuthGuardService } from './auth-guard.service';


//assigning all possible routes to variable 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
<<<<<<< HEAD
=======
    path: 'recipes',
    component: RecipesComponent,
  },
  {
>>>>>>> e86f4600e85233f6f3219e4e7e021bb58faddcf4
    path: 'categories/:id',
    component: CategoryComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'orders/:id',
    component: OrderdetailsComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'pdf/:id',
    component: HtmltopdfComponent,
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/postproduct',
    component: PostProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/orders',
    component: MyordersComponent,
    canActivate: [AuthGuardService],
  },
  {
<<<<<<< HEAD
=======
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
>>>>>>> e86f4600e85233f6f3219e4e7e021bb58faddcf4
    path: '**',
    redirectTo: '',
  },
];

//decorator to import and export routing Module in the application 
@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes)],
=======
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
>>>>>>> e86f4600e85233f6f3219e4e7e021bb58faddcf4
  exports: [RouterModule],
})
export class AppRoutingModule {}

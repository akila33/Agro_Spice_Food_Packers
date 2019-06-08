import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MainNavComponent } from './inc/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatDialogModule, MatCardModule, MatGridListModule, MatInputModule, MatSnackBarModule, MatTableModule, MatTableDataSource, MatPaginatorModule } from '@angular/material';
import { HomeComponent } from './menus/home/home.component';
import { SnackComponent } from './snack/snack.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './menus/product/product.component';
import { CustomersComponent } from './menus/customers/customers.component';
import { NotificationService } from './services/notification.service';
import { ManageAdminComponent } from './menus/manage-admin/manage-admin.component';
import { AdminComponent } from './menus/admin/admin.component';
import { ProfileComponent } from './menus/home/profile/profile.component';
import { UserCountComponent } from './menus/home/user-count/user-count.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { UsageChartComponent } from './menus/home/usage-chart/usage-chart.component';
import { ForumMessageComponent } from './menus/home/forum-message/forum-message.component';
import { EmailComponent } from './menus/home/email/email.component';
import { EmployeeComponent } from './menus/employee/employee.component';
import { ManageEmployeeComponent } from './menus/manage-employee/manage-employee.component';
import { AddCategoryComponent } from './menus/add-category/add-category.component';
import { AddProductComponent } from './menus/add-product/add-product.component';
import { MessageComponent } from './message/message.component';
import { MyProductsComponent } from './menus/my-products/my-products.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    SnackComponent,
    LoginComponent,
    ProductComponent,
    CustomersComponent,
    ManageAdminComponent,
    AdminComponent,
    ProfileComponent,
    UserCountComponent,
    ManageCustomersComponent,
    UsageChartComponent,
    ForumMessageComponent,
    EmailComponent,
    EmployeeComponent,
    ManageEmployeeComponent,
    AddCategoryComponent,
    AddProductComponent,
    MessageComponent,
    MyProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  entryComponents:[SnackComponent,AdminComponent,CustomersComponent,EmailComponent,EmployeeComponent]
})
export class AppModule { }

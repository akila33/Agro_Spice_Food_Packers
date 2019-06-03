<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> eebd42e974b5aa648e3bf2cf532abdf9284e05fd
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
<<<<<<< HEAD
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatToolbarModule, MatDialogModule, MatMenuModule, MatTooltipModule, MatFormFieldModule } from '@angular/material';
=======
>>>>>>> eebd42e974b5aa648e3bf2cf532abdf9284e05fd
=======
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
import { ManageEmployerComponent } from './menus/manage-employer/manage-employer.component';
import { SnackComponent } from './snack/snack.component';
import { EmployerComponent } from './menus/employer/employer.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './menus/product/product.component';
import { CustomersComponent } from './menus/customers/customers.component';
import { NotificationService } from './services/notification.service';
import { ManageAdminComponent } from './menus/manage-admin/manage-admin.component';
import { AdminComponent } from './menus/admin/admin.component';
import { ProfileComponent } from './menus/home/profile/profile.component';
import { UserCountComponent } from './menus/home/user-count/user-count.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
>>>>>>> 8ee506d3346355699e225b2bf73eb67ac5361d99

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ManageEmployerComponent,
    SnackComponent,
    EmployerComponent,
    LoginComponent,
    ProductComponent,
    CustomersComponent,
    ManageAdminComponent,
    AdminComponent,
    ProfileComponent,
    UserCountComponent,
    ManageCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
<<<<<<< HEAD
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RegistrationComponent,
    LoginComponent,
    AddProductComponent
    
=======
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

>>>>>>> eebd42e974b5aa648e3bf2cf532abdf9284e05fd
=======
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
>>>>>>> 8ee506d3346355699e225b2bf73eb67ac5361d99
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
  entryComponents:[EmployerComponent,SnackComponent,AdminComponent,CustomersComponent]
})
export class AppModule { }

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
    CustomersComponent
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
  entryComponents:[EmployerComponent,SnackComponent]
})
export class AppModule { }

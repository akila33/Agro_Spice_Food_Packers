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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

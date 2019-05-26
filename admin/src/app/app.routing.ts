import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { RegistrationComponent} from './registration/registration.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import { TableListComponent} from './table-list/table-list.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]
},

  // {
  //   path: '',
  //   component: DashboardComponent,
  // },
  //{ path: '',  redirectTo: 'dashboard', pathMatch: 'full' },
  
    //  { path: 'dashboard',      component: DashboardComponent },
    //  { path: 'user-profile',   component: UserProfileComponent },
    //  { path: 'table-list',     component: TableListComponent },
    //  {
    //   path: 'registration',
    //   component: RegistrationComponent,
    //   canActivate: [AuthGuardService],
    // },
    // {
    //   path: '**',
    //   redirectTo: '',
    // },

    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
     
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    //RouterModule
  ],
})
export class AppRoutingModule { }

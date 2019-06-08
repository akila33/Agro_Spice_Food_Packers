import { Component } from '@angular/core';
import { HttpEmailService } from './http-email.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router:Router) {}

  isLoggedIn=false;
  ngOnInit() {

  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    localStorage.removeItem("user");
  }

  get tokenAdmin() {
    return localStorage.getItem('token');
  }

}

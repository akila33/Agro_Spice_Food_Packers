//DataService.ts - Type Script file to facilitate DataService to know type of message,handle cart functionality 


//including required modules and services 
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RestApiService } from './rest-api.service';


//Exporting the DataService
@Injectable()
export class DataService {
  message = '';
  messageType = 'danger';

  admin: any;
  cartItems = 0;

  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message) {
    this.messageType = 'warning';
    this.message = message;
  }

  async getProfile() {
    try {
      if (localStorage.getItem('token')) {
        const data = await this.rest.get(
          'http://localhost:3030/api/admin-accounts/admin-profile',
        );
        this.admin = data['admin'];
        let adminPro={
          name:this.admin['name'],
          email:this.admin['email']
        }
        localStorage.setItem('userProfile',JSON.stringify(adminPro));
      }
    } catch (e) {
      this.error(e);
    }
  }
}
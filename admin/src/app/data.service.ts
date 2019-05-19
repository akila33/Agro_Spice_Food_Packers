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

  user: any;
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
          'http://localhost:3030/api/accounts/profile',
        );
        this.user = data['user'];
        let userPro={
          name:this.user['name'],
          email:this.user['email']
        }
        localStorage.setItem('userProfile',JSON.stringify(userPro));
      }
    } catch (e) {
      this.error(e);
    }
  }
}

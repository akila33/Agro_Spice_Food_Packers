import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DataService } from './../data.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  isCollapsed = true;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(private router: Router, private data: DataService, public location: Location, private element : ElementRef) {
      this.data.cartItems = this.data.getCart().length;
      this.data.getProfile();
      this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    get token() {
      return localStorage.getItem('token');
    }
  
    collapse() {
      this.isCollapsed = true;
    }
  
    closeDropdown(dropdown) {
      dropdown.close();
    }
  
    logout() {
      this.data.user = {};
      this.data.cartItems = 0;
      localStorage.clear();
      this.router.navigate(['']);
    }
  
    search() {
      if (this.searchTerm) {
        this.collapse();
        this.router.navigate(['search', { query: this.searchTerm }]);
      }
    }
  
    getShortName(fullName) { 
      return fullName.split(' ')[0];
    }
}

//app.component.ts- TypeScript file which facilitates authorization and provides logout and search functionality to e learning client application ///


//including required services and modules 
import { Component, OnInit, ElementRef, Inject, Renderer, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

//Component specific details 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

//exporting the AppComponnet for reuse 
export class AppComponent implements OnInit{
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  searchTerm = '';
  isCollapsed = true;

  private toggleButton: any;
  private sidebarVisible: boolean;

  

  constructor(private router: Router, private data: DataService,public location: Location, private element : ElementRef,
    private renderer : Renderer, @Inject(DOCUMENT,) private document: any) {
    this.data.cartItems = this.data.getCart().length;
    this.data.getProfile();

    this.sidebarVisible = false;
  }

  //App component
ngOnInit(){

  var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
        }else{
            window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();
    });
    this.renderer.listenGlobal('window', 'scroll', (event) => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
            // add logic
            navbar.classList.remove('navbar-transparent');
        } else {
            // remove logic
            navbar.classList.add('navbar-transparent');
        }
    });
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    if (version) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('ie-background');

    }
}

}


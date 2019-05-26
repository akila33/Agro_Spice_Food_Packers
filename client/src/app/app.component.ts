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

// New elements
//   ngOnInit() {
//     const navbar: HTMLElement = this.element.nativeElement;
//     this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
// }
// sidebarOpen() {
//     const toggleButton = this.toggleButton;
//     const html = document.getElementsByTagName('html')[0];
//     // console.log(html);
//     // console.log(toggleButton, 'toggle');

//     setTimeout(function(){
//         toggleButton.classList.add('toggled');
//     }, 500);
//     html.classList.add('nav-open');

//     this.sidebarVisible = true;
// };
// sidebarClose() {
//     const html = document.getElementsByTagName('html')[0];
//     // console.log(html);
//     this.toggleButton.classList.remove('toggled');
//     this.sidebarVisible = false;
//     html.classList.remove('nav-open');
// };
// sidebarToggle() {
//     // const toggleButton = this.toggleButton;
//     // const body = document.getElementsByTagName('body')[0];
//     if (this.sidebarVisible === false) {
//         this.sidebarOpen();
//     } else {
//         this.sidebarClose();
//     }
// };

}








// export class NavbarComponent implements OnInit {
//   private toggleButton: any;
//   private sidebarVisible: boolean;

//   constructor(public location: Location, private element : ElementRef) {
//       this.sidebarVisible = false;
//   }

//   ngOnInit() {
//       const navbar: HTMLElement = this.element.nativeElement;
//       this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
//   }
//   sidebarOpen() {
//       const toggleButton = this.toggleButton;
//       const html = document.getElementsByTagName('html')[0];
//       // console.log(html);
//       // console.log(toggleButton, 'toggle');

//       setTimeout(function(){
//           toggleButton.classList.add('toggled');
//       }, 500);
//       html.classList.add('nav-open');

//       this.sidebarVisible = true;
//   };
//   sidebarClose() {
//       const html = document.getElementsByTagName('html')[0];
//       // console.log(html);
//       this.toggleButton.classList.remove('toggled');
//       this.sidebarVisible = false;
//       html.classList.remove('nav-open');
//   };
//   sidebarToggle() {
//       // const toggleButton = this.toggleButton;
//       // const body = document.getElementsByTagName('body')[0];
//       if (this.sidebarVisible === false) {
//           this.sidebarOpen();
//       } else {
//           this.sidebarClose();
//       }
//   };
//   isHome() {
//       var titlee = this.location.prepareExternalUrl(this.location.path());

//       if( titlee === '/home' ) {
//           return true;
//       }
//       else {
//           return false;
//       }
//   }
//   isDocumentation() {
//       var titlee = this.location.prepareExternalUrl(this.location.path());
//       if( titlee === '/documentation' ) {
//           return true;
//       }
//       else {
//           return false;
//       }
//   }
// }

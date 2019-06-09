//Cart component.ts - Type Script file that contains code to render cart feature to elearning application

//including the required files and services 
import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../notifications.service';
import { Validators, FormBuilder } from '@angular/forms';

//componnet files specifications 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

//exporting the cart component 
export class CartComponent implements OnInit {
  btnDisabled = false;
  handler: any;
  bill:any;

  quantities = [];
  itemsList=[];

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private router: Router,
    private notificationService : NotificationsService,
    private fb: FormBuilder
  ) {}

  userProfile:any;
  
  infoForm = this.fb.group({
    name: ['',[
      Validators.required,
    ]],
    email: ['',[
      Validators.required,
    ]]
    
  });
  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }

  trackByCartItems(index: number, item: any) {
    return item._id;
  }

  get cartItems() {
    return this.data.getCart();
  }

  get cartTotal() {
    let total = 0;
    this.cartItems.forEach((data, index) => {
      total += data['price'] * this.quantities[index];
    });
    return total;
  }

  removeProduct(index, product) {
    this.quantities.splice(index, 1);
    this.data.removeFromCart(product);
  }

  ngOnInit() {
    this.cartItems.forEach(data => {
      this.quantities.push(1);
    });
    
    this.userProfile=JSON.parse(localStorage.getItem('userProfile'));
    //console.log(this.userProfile);
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'assets/img/logo.png',
      locale: 'auto',
      token: async stripeToken => {
        let products;
        products = [];
        this.cartItems.forEach((d, index) => {
          products.push({
            product: d['_id'],
            quantity: this.quantities[index],
          });
        });
        try {
          this.notificationService.sendEmail(this.bill).
            subscribe(data => {
              console.log(data);
            }, error => {
              console.error(error, "error");
            });
          const data = await this.rest.post(
            'http://localhost:3030/api/payment',
            {
              totalPrice: this.cartTotal,
              products,
              stripeToken,
            },
          );
          data['success']
            ? (this.data.clearCart(), this.data.success('Purchase Successful.'))
            : this.data.error(data['message']);
            

        } catch (error) {
          this.data.error(error['message']);
        }
      },
    });
  }

  validate() {
    if (!this.quantities.every(data => data > 0)) {
      this.data.warning('Quantity cannot be less than one.');
    } else if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']).then(() => {
        this.data.warning('You need to login before making a purchase.');
      });
    } else if (!this.data.user['address']) {
      this.router.navigate(['/profile/address']).then(() => {
        this.data.warning('You need to login before making a purchase.');
      });
    } else {
      this.data.message = '';
      return true;
    }
  }

  checkout() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        this.handler.open({
          name: 'Agro Spice Food Packers',
          description: 'Checkout Payment',
          // amount: this.cartTotal * 100,
          closed: () => {
            this.btnDisabled = false;
          },
        });
        console.log(this.infoForm.value);
        //console.log(this.cartItems);
        
        this.cartItems.forEach(element => {
          const cartData={
            item:element["title"],
            price:element["price"]
          };
          this.itemsList.push(cartData);
        });
        //console.log("Item List ",this.itemsList.length);
        // ........... Calling to the Email service
        this.bill={
          name:this.infoForm.value['name'],
          email:this.infoForm.value['email'],
          items:this.itemsList
        }
        //console.log("Bill " ,bill);

      } else {
        this.btnDisabled = false;
      }
    } catch (error) {
      this.data.error(error);
    }
  }
}

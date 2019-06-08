import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testing the email validity
  it('email field validity', () => {
    let email = component.infoForm.controls['email']
    expect(email.valid).toBeFalsy();

    let errors = {};
    errors=email.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['email']).toBeTruthy();
  });

  //Testing the name validity
  it('name field validity', () => {
    let name = component.infoForm.controls['name']
    expect(name.valid).toBeFalsy();

    let errors = {};
    errors=name.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['email']).toBeTruthy();
  });

  //Testing weather the quantity is greater than zero
  it('quantity field validity', () => {
    var quantity : any;
    
    expect (quantity > 0).toBeTruthy();
  });


});

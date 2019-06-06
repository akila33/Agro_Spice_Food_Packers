import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductComponent } from './post-product.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PostProductComponent', () => {
  let component: PostProductComponent;
  let fixture: ComponentFixture<PostProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProductComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Invalid when the form is empty
  it('form invalid when empty', () => {
    expect(component.rForm.valid).toBeFalsy();
  })

  //Testing the title validity
  //title is invalid initially
  it('title field validity', () => {
    let title = component.rForm.controls['title']
    expect(title.valid).toBeFalsy();

    let errors = {};
    errors=title.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['title']).toBeTruthy();
  });

  //Testing the price validity
  //price is invalid initially
  it('price field validity', () => {
    let price = component.rForm.controls['price']
    expect(price.valid).toBeFalsy();

    let errors = {};
    errors=price.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['price']).toBeTruthy();
  });

  //Testing the categoryId validity
  //categoryId is invalid initially
  it('categoryId field validity', () => {
    let categoryId = component.rForm.controls['categoryId']
    expect(categoryId).toBeFalsy();

    let errors = {};
    errors=categoryId.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['categoryId']).toBeTruthy();
  });

  //Testing the quantity validity
  //quantity is invalid initially
  it('quantity field validity', () => {
    let quantity = component.rForm.controls['quantity']
    expect(quantity).toBeFalsy();

    let errors = {};
    errors=quantity.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['quantity']).toBeTruthy();
  });

  //Testing the description validity
  //description is invalid initially
  it('description field validity', () => {
    let description = component.rForm.controls['description']
    expect(description.valid).toBeFalsy();

    let errors = {};
    errors=description.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['description']).toBeTruthy();
  });

  //Testing the product_picture validity
  //product_picture is invalid initially
  it('description field validity', () => {
    let product_picture = component.rForm.controls['product_picture']
    expect(product_picture.valid).toBeFalsy();

    let errors = {};
    errors=product_picture.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['product_picture']).toBeTruthy();
  });

});

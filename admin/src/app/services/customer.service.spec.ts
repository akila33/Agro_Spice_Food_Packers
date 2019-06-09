import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('CustomerService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
  });

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });

  it(
    'should get users',
    inject(
      [HttpTestingController, CustomerService],
      (httpMock: HttpTestingController, customerService: CustomerService) => {
        const mockUsers = [
          { name: 'Bob', email: 'bob@yessss.com' },
          { name: 'Juliette', email: 'J@nope.com' }
        ];

        customerService.getAllCustomers().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(customerService.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );


});

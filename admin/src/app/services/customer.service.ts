import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomers(){
    return this.http.get("http://localhost:3030/api/accounts/read");
  }

}

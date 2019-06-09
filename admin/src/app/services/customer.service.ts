import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3030/api/accounts";

  getAllCustomers(){
    return this.http.get(this.url+"/read");
  }

  addCustomers(customers){
    return this.http.post(this.url+"/create",customers);
  }

  deleteCustomers(id){
    return this.http.delete(this.url+"/delete/"+id);
  }

  updateCustomers(customers){
    return this.http.put(this.url+"/update",customers);
  }
  
  
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseURL = "http://localhost:3030/api/product";


  constructor(private http: HttpClient) { }


  getProductList() {
    return this.http.get(this.baseURL+"/read");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adminAuth(admin){
    return this.http.post("http://localhost:3030/api/admin-accounts/admin-login",admin);
  }

}

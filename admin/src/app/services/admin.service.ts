import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adminAuth(admin){
    return this.http.post("http://localhost:3030/api/admin-accounts/admin-login",admin);
  }
  getAllAdmins(){
    return this.http.get("http://localhost:3030/api/admin-accounts/get-admins");
  }

  addAdmin(admin){
    return this.http.post("http://localhost:3030/api/admin-accounts/admin-signup",admin);
  }

  updateAdmin(admin){
    return this.http.put("/update",admin);
  }

  
  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    __v: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      _id: null,
      name: '',
      email: '',
      password: '',
      __v:0
    });
  }

  populateForm(employer: any) {
    this.form.setValue(employer);
  }

}

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
    return this.http.put("http://localhost:3030/api/admin-accounts/update-admins",admin);
  }

  deleteAdmin(id){
    return this.http.delete("http://localhost:3030/api/admin-accounts/delete/"+id);
  }

  
  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    __v: new FormControl(''),
    created:new FormControl(null),
    picture:new FormControl(null)
  });

  initializeFormGroup() {
    this.form.setValue({
      _id: null,
      name: '',
      email: '',
      password: '',
      __v:0,
      created:null,
      picture:null
    });
  }

  populateForm(employer: any) {
    this.form.setValue(employer);
  }

}

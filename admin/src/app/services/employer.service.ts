import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http:HttpClient) { }
  API="http://localhost:3030/api/employer";

  getAllEmployers(){
    return this.http.get(this.API+"/read");
  }

  addEmployer(employer){
    return this.http.post(this.API+"/create",employer);
  }

  deleteEmployer(id){
    return this.http.delete(this.API+"/delete/"+id);
  }

  updateEmployer(employer){
    return this.http.put(this.API+"/update",employer);
  }

  
  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('',Validators.required),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    __v: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      _id: null,
      username: '',
      fullname: '',
      address: '',
      city: '',
      mobile: '',
      email: '',
      password: '',
      __v:0
    });
  }

  populateForm(employer: any) {
    this.form.setValue(employer);
  }
}

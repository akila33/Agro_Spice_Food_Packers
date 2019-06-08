import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = "http://localhost:3030/api/employee";


  constructor(private http: HttpClient) { }

  postEmployee(emp) {
    return this.http.post(this.baseURL+"/create" ,emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL+"/read");
  }

  putEmployee(emp) {
    return this.http.put(this.baseURL + "/update", emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + "/delete/"+_id);
  }

  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    salary: new FormControl('',Validators.required),
    __v: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      _id: null,
      username: '',
      fullname: '',
      address: '',
      mobile: '',
      email: '',
      salary: '',
      __v:0
    });
  }

  populateForm(employer: any) {
    this.form.setValue(employer);
  }
}

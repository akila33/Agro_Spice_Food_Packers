import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendMail(data){
    return this.http.post('http://localhost:3030/api/message/sendMail',data);
  }

  form: FormGroup = new FormGroup({
    reciever: new FormControl('',[Validators.required,Validators.email]),
    subject:new FormControl('',[Validators.required]),
    body: new FormControl('',Validators.required)

  });

  initializeFormGroup() {
    this.form.setValue({
      reciever: '',
      subject:'',
      body: ''
    });
  }

  populateForm(email: any) {
    this.form.setValue(email);
  }
}

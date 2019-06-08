import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:3030/api/message';

  form: FormGroup = new FormGroup({
    sender:new FormControl('',[Validators.required,Validators.email]),
    reciever: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      sender:'',
      reciever:'',
      message:''
    });
  }

  sendMessage(message:any){
    return this.http.post(this.API,message+"/create");
  }

  getAllMessages(){
    return this.http.get(this.API+"/read");
  }

  deleteMessage(id:string){
    return this.http.delete(this.API+"/delete/"+id);
  }

  populateForm(message: any) {
    this.form.setValue(message);
  }
}

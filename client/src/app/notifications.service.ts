import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotificationsService {

  constructor(private http:HttpClient) { }

  api='http://localhost:3030/api/sendMail';

  sendEmail(data){
    return this.http.post(this.api,data);
  }

}

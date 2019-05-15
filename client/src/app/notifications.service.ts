import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssertNotNull } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { Iinfo } from './info.model';

@Injectable()
export class NotificationsService {

  constructor(private http:HttpClient) { }

  sendEmail(obj):Observable<Iinfo>{
    console.log(obj);
    return this.http.post<Iinfo>('http://localhost:3030/api/sendMail',obj);
  }

}

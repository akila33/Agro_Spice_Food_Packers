import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})
export class ForumMessageComponent implements OnInit {

  constructor(private service:NotificationsService) { }

  sender='';
  reciever="admin";
  message='';

  ngOnInit() {

  }

  sendMessage(){
    if(this.sender){
      if(this.message){
        const mes={
          sender:this.sender,
          reciver:this.reciever,
          message:this.message
        }
        console.log(mes);
        this.service.sendMessage(mes).subscribe(data=>{
          this.sender='';
          this.message='';
          console.log(data);
          swal({
            title: "Success!",
            text: "Your message sent! Admin will reply soon!",
            icon: "success",
          });
        });
      }
      else{
        swal({
          title: "Invalid Message!",
          text: "Please enter valid Message!",
          icon: "warning",
        });
      }
      
    }
    else{
      swal({
        title: "Invalid Email!",
        text: "Please enter valid email!",
        icon: "warning",
      });
    }
  }

}

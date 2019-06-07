import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EmailService } from 'src/app/services/email.service';
import { DialogService } from 'src/app/services/dialog.service';
import { EmailComponent } from '../email/email.component';
import { MessageService } from 'src/app/services/message.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})
export class ForumMessageComponent implements OnInit {

  constructor(private emailService:EmailService,
    private dialog:MatDialog,
    private dialogService:DialogService,
    private messageService:MessageService,
    private notificationService:NotificationService) { }

  messages;
  ngOnInit() {
    this.messageService.getAllMessages().subscribe(data=>{
      this.messages=data["msg"];
      console.log("Messages",this.messages);
    })
    
  }

  Reply(email){
    console.log(email.sender);
    this.emailService.populateForm({
      'reciever':email.sender,
      'subject':email.message,
      'body':''
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmailComponent,dialogConfig);
  }

  remove(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this Message ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.messageService.deleteMessage(id).subscribe(result => {
        }, error => console.error(error));
        this.notificationService.success('! Deleted successfully');   
      }
      this.refresh();
         
    });
  }

  refresh(){
    this.ngOnInit();
  }

}

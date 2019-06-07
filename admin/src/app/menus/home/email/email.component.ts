import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { EmailService } from 'src/app/services/email.service';
import { ForumMessageComponent } from '../forum-message/forum-message.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private service: EmailService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ForumMessageComponent>,
    private emailService: EmailService
  ) {}

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('body').value){
        console.log(this.service.form.value);
        this.emailService.sendMail(this.service.form.value).subscribe(data=>{
          console.log(data);
        });
        this.notificationService.success("Email sent!");
        this.onClose()
      }
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}

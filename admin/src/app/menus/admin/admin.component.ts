import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private dialogRef:MatDialogRef<AdminComponent>,
    private service:AdminService,
    private notificationService :NotificationService) { }

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('_id').value){
        this.service.updateAdmin(this.service.form.value).subscribe();
        console.log("Update");
        this.ngOnInit();
        this.notificationService.success(':: Update successfully.');
      }
      else{
        this.service.addAdmin(this.service.form.value).subscribe();
        console.log("Insert");
        this.ngOnInit();
        this.notificationService.success(':: Successfully Added.');
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }    
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

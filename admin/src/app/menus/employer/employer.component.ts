import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EmployerService } from 'src/app/services/employer.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<EmployerComponent>,
    private service:EmployerService,
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
        this.service.updateEmployer(this.service.form.value).subscribe();
        console.log("Update");
        this.ngOnInit();
        this.notificationService.success(':: Update successfully.');
      }
      else{
        this.service.addEmployer(this.service.form.value).subscribe();
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

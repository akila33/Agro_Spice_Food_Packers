import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { EmployeeService  } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<EmployeeComponent>,
    private service:EmployeeService,
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
        this.service.putEmployee(this.service.form.value).subscribe();
        console.log("Update");
        this.ngOnInit();
        this.notificationService.success(':: Update successfully.');
      }
      else{
        this.service.postEmployee(this.service.form.value).subscribe();
        console.log("Form",this.service.form.value);
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


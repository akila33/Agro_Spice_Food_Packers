import { Component, OnInit} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<CustomersComponent>,
    private service:CustomerService,) { }

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('_id').value){
        this.service.updateCustomers(this.service.form.value).subscribe();
        console.log("Update");
        this.ngOnInit();
      }
      else{
        this.service.addCustomers(this.service.form.value).subscribe();
        console.log("Insert");
        this.ngOnInit();
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

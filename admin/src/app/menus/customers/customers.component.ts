import { Component, OnInit} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<CustomersComponent>,
    private service:CustomerService,
    private notificationService :NotificationService) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}

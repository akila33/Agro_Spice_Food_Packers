import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.scss']
})


export class UserCountComponent implements OnInit {

  adminCount;
  employeeCount;
  customerCount;

  constructor(private adminService:AdminService,
    private customerService:CustomerService,
    private employeeService:EmployerService
    ) { }

  ngOnInit() {
    this.adminService.getAllAdmins().subscribe(data=>{
      this.adminCount=data["msg"].length;
    });

    this.customerService.getAllCustomers().subscribe(data=>{
      this.customerCount=data["msg"].length;
    });

    this.employeeService.getAllEmployers().subscribe(data=>{
      this.employeeCount=data["msg"].length;
    });

  }

}

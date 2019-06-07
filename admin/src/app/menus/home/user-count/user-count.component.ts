import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';

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
    private employeeService:EmployeeService
    ) { }

  ngOnInit() {
    this.adminService.getAllAdmins().subscribe(data=>{
      this.adminCount=data["msg"].length;
    });

    this.customerService.getAllCustomers().subscribe(data=>{
      this.customerCount=data["msg"].length;
    });

    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employeeCount=data["msg"].length;
    });

  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'email', 'address'];
  @ViewChild(MatSort) sort: MatSort;
  customers:any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers=data['msg'];
      console.log(this.customers);
    });

    this.customerService.getAllCustomers().subscribe(
      list => {
        this.listData = new MatTableDataSource(list['msg']);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

}

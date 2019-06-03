import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogService } from 'src/app/services/dialog.service';
//import { CustomersComponent } from '../customers/customers.component';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'email'];
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;

  customers:Array<any>;
  customerObj=[];

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog, 
    private dialogService: DialogService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers=data['msg'];
      //console.log(this.customers);
      this.createCusWithAddress(this.customers);
      console.log(this.customerObj);
      this.listData = new MatTableDataSource(this.customerObj);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  // onEdit(row){
  //   console.log(row);
  //   this.customerService.populateForm(row);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "60%";
  //   this.dialog.open(CustomersComponent,dialogConfig).afterClosed().subscribe(result=>{
  //     this.refresh();
  //   })
  // }

  refresh(){
    this.customerService.getAllCustomers().subscribe(
      list => {
        this.listData = new MatTableDataSource(list['msg']);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }


  createCusWithAddress(customers){
    let n=0;
      while(n<customers.length) {
        if(customers[n]["address"]!=null){
          const customer={
            name:customers[n]["name"],
            email:customers[n]["email"],
            address:customers[n]["address"]["addr1"]+","+customers[n]["address"]["city"]+","+customers[n]["address"]["country"]
          }
          this.customerObj.push(customer);
        }
        else{
          const customer={
            name:customers[n]["name"],
            email:customers[n]["email"],
            address: ""
          }
          this.customerObj.push(customer);
        }
        n++;
      }
  }

}
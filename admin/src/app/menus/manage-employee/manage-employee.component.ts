import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['username', 'fullname', 'address','mobile','email','salary','actions'];
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;
  employers:any;

  constructor(
    private employerService : EmployeeService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.employerService.getEmployeeList().subscribe(data=>{
        this.employers=data['msg'];
        console.log(this.employers);
      });

      this.employerService.getEmployeeList().subscribe(
        list => {
          this.listData = new MatTableDataSource(list['msg']);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        });
  }

  remove(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.employerService.deleteEmployee(id).subscribe(result => {
        }, error => console.error(error));
        this.notificationService.success('! Deleted successfully');
      }
      this.refresh();

    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {
    this.employerService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }

  onEdit(row){
    console.log(row);
    this.employerService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }

  refresh(){
    this.employerService.getEmployeeList().subscribe(
      list => {
        this.listData = new MatTableDataSource(list['msg']);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }


}

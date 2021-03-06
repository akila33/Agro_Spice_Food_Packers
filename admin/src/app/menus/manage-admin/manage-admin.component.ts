import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'email','actions'];
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;
  admins:any;
  user:any;

  constructor(
    private adminService : AdminService ,
    private dialog: MatDialog,
    private notificationService: NotificationService, 
    private dialogService: DialogService) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'));
    this.adminService.getAllAdmins().subscribe(data=>{
        this.admins=data['msg'];
        console.log(this.admins);
      });
    
      this.adminService.getAllAdmins().subscribe(
        list => {
          this.listData = new MatTableDataSource(list['msg']);
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


  onCreate() {
    this.adminService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AdminComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }

  deleteAdmin(id){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.adminService.deleteAdmin(id).subscribe(result => {
        }, error => console.error(error));
        this.notificationService.success(':: Deleted successfully');   
      }
      this.refresh();
    });
  }


  onEdit(row){
    console.log(row);
    this.adminService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdminComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }

  refresh(){
    this.adminService.getAllAdmins().subscribe(
      list => {
        this.listData = new MatTableDataSource(list['msg']);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

}

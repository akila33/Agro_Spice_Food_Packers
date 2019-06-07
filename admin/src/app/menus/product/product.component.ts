import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { ProductService } from 'src/app/services/product.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['owner', 'category', 'title','price'];

  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;
  products: any;

  constructor(
    private productService : ProductService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }


    ngOnInit() {
      this.productService.getProductList().subscribe(data=>{
          this.products=data['msg'];
          console.log(this.products);
        });

        this.productService.getProductList().subscribe(
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

}

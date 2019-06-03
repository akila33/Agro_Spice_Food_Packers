import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SnackComponent } from '../snack/snack.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg){
    return this.dialog.open(SnackComponent,{
      data :{
        message : msg
      }
    });
  }
}

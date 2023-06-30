import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employees } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employees,
  ){}

  onNoClick():void{
    this.dialogRef.close(false);
  }

  onConfirm():void{
    this.dialogRef.close(true);
  }

}

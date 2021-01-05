import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-approve-dailog',
  templateUrl: './approve-dailog.component.html',
  styleUrls: ['./approve-dailog.component.css']
})
export class ApproveDailogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ApproveDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Input, OnChanges, ViewChild, Inject, Output,EventEmitter } from '@angular/core';
import { employee } from 'src/app/model/employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';
import { SoftlockService } from 'src/app/services/softlock.service';


@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit,OnChanges {
  displayedColumns: string[] = ['Employee_id', 'Name', 'Skills', 'Profile','Experience','Manager',"Request Lock"];
  @Input("employees") empdata:employee[];
  @Output('notify') notifyhome:EventEmitter<string>=new EventEmitter<string>(); 
  datasource;
  empcurrent:number;
  manager:string;
  requestmessage:string="";
  waiting1:string="block";
  waiting2:string="none";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog,private log:LogService,private soft:SoftlockService) { }

  ngOnInit(): void {
   
  }

  loadDialog(employee_id){
    this.empcurrent=employee_id;
    const dialogRef = this.dialog.open(RequestDialog, {
      width: '500px',
      data: {employee_id:this.empcurrent,requestmessage:this.requestmessage,
      manager:this.log.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.waiting1="none";
        this.waiting2="block";
        this.soft.sendRequest({employee_id:this.empcurrent,
        manager:this.log.username,requestmessage:result}).subscribe(
           (data)=>{
              console.log(data);
              alert("Lock Request is submitted");
              this.notifyhome.emit('submitted');
              this.waiting1="block";
              this.waiting2="none";
           },
           (response)=>{
             console.log(response.status);
               if(response.status==201){
               alert("Lock Request is submitted");
               this.notifyhome.emit('submitted');
              
               }
               else if(response.status==208){
                 alert("A Recent Lock is request by other user");
                 this.notifyhome.emit('submitted');
                
               }
               else
               alert("There is an issue in submitting the request,retry");

               this.waiting1="block";
               this.waiting2="none";
           }
        )
      }
    });
  }
  

  ngOnChanges(){
    console.log(this.empdata);
    this.datasource=new MatTableDataSource<employee>(this.empdata);
    this.datasource.paginator=this.paginator;
  }
  

}


@Component({
  selector: 'request-dialog',
  templateUrl: 'request-dialog.html',
  styleUrls:['request-dialog.css']
  
})
export class RequestDialog {

  constructor(
    public dialogRef: MatDialogRef<RequestDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';
import { softlock } from 'src/app/model/softlock';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';
import { SoftlockService } from 'src/app/services/softlock.service';
import { MatTableDataSource } from '@angular/material/table';
import { ApproveDailogComponent } from './approve-dailog/approve-dailog.component';

@Component({
  selector: 'app-approve-table',
  templateUrl: './approve-table.component.html',
  styleUrls: ['./approve-table.component.css']
})
export class ApproveTableComponent implements OnInit {
  displayedColumns: string[] = ['Employee_id', 'Requestee', 'Request Date', 'Manager','View Details'];
  @Input("locks") lockdata:softlock[];
  @Output('notify') notifyhome:EventEmitter<string>=new EventEmitter<string>(); 
  datasource;
  waiting1:string="block";
  waiting2:string="none";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog,private log:LogService,private soft:SoftlockService) { }


  ngOnInit(): void {
  }

  loadDialog(current:softlock){
    console.log(current);
    const dialogRef = this.dialog.open(ApproveDailogComponent, {
      width: '500px',
      data: {employee_id:current.employee_id,status:current.status
      ,requestmessage:current.requestmessage,manager:current.employee.manager,
      requestee:current.manager,wfmmessage:""}
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result){
          let input:any=current;
             if(result.status=="Approve"){
                input.status="approved"
             }
             else if(result.status=="Decline"){
               input.status="declined";
               input.wfmremark=result.message;
             }
            console.log(input);
            this.waiting1="none";
            this.waiting2="block";
             this.soft.updateRequest(input).subscribe(
              (data)=>{
                console.log(data);
                alert("Status update is submitted");
                this.notifyhome.emit('submitted');
                this.waiting1="block";
                this.waiting2="none";
             },
             (response)=>{
               console.log(response.status);
                 if(response.status==201){
                 alert("Status update is submitted");
                 this.notifyhome.emit('submitted');
                
                 }
               
                 else
                 alert("There is an issue in submitting the request,retry");
  
                 this.waiting1="block";
                 this.waiting2="none";
             }
          );
            

        }
    });
  }

  
  ngOnChanges(){
    this.datasource=new MatTableDataSource<softlock>(this.lockdata);
    this.datasource.paginator=this.paginator;
  }
  

}

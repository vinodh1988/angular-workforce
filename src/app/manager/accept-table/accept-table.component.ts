import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';
import { softlock } from 'src/app/model/softlock';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';
import { SoftlockService } from 'src/app/services/softlock.service';
import { MatTableDataSource } from '@angular/material/table';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';


@Component({
  selector: 'app-accept-table',
  templateUrl: './accept-table.component.html',
  styleUrls: ['./accept-table.component.css']
})
export class AcceptTableComponent implements OnInit {

  displayedColumns: string[] = ['Employee_id', 'WFM Manager', 'Approved Date', 'Manager','View Details'];
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
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '500px',
      data: {employee_id:current.employee_id,status:current.status
      ,requestmessage:current.requestmessage,manager:current.employee.manager,
      approvedby:current.employee.wfm_manager,mgrmessage:""}
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result){
          let input:any=current;
             if(result.status=="Accept"){
                input.managerstatus="accepted"
             }
             else if(result.status=="Reject"){
               input.managerstatus="rejected";
               input.mgrstatuscomment=result.message;
             }
            console.log(input);
            this.waiting1="none";
            this.waiting2="block";
             this.soft.updateRequest(input).subscribe(
              (data)=>{
                console.log(data);
                alert("Your response is submitted");
                this.notifyhome.emit('submitted');
                this.waiting1="block";
                this.waiting2="none";
             },
             (response)=>{
               console.log(response.status);
                 if(response.status==201){
                 alert("your response is submitted");
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

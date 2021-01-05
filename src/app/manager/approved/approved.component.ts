import { Component, OnInit } from '@angular/core';
import { softlock } from 'src/app/model/softlock';
import { SoftlockService } from 'src/app/services/softlock.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  locks:softlock[];
  constructor(private ss:SoftlockService) { }

  ngOnInit(): void {
     this.readData();


  }

  readData():void{
    this.ss.getApprovedLocks().subscribe(
      (data:softlock[])=>{
        console.log(this.locks);
        this.locks=data},
      ()=>this.locks=[] 
   )
  }
}

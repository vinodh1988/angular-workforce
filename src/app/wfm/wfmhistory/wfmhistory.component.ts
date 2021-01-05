import { Component, OnInit } from '@angular/core';
import { softlock } from 'src/app/model/softlock';
import { SoftlockService } from 'src/app/services/softlock.service';

@Component({
  selector: 'app-wfmhistory',
  templateUrl: './wfmhistory.component.html',
  styleUrls: ['./wfmhistory.component.css']
})
export class WfmhistoryComponent implements OnInit 
{
  locks:softlock[];
  constructor(private ss:SoftlockService ){ 

  }

  ngOnInit():void {
     this.readData();


  }

  readData():void{
    this.ss.getInactiveLocks().subscribe(
      (data:softlock[])=>{
        console.log(this.locks);
        this.locks=data},
      ()=>this.locks=[] 
   )
  }


}

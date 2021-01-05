import { Component, OnInit } from '@angular/core';
import { SoftlockService } from 'src/app/services/softlock.service';
import { softlock } from 'src/app/model/softlock';

@Component({
  selector: 'app-waiting-requests',
  templateUrl: './waiting-requests.component.html',
  styleUrls: ['./waiting-requests.component.css']
})
export class WaitingRequestsComponent implements OnInit {
locks:softlock[];
  constructor(private ss:SoftlockService) { }

  ngOnInit(): void {
     this.readData();


  }

  readData():void{
    this.ss.getLocks().subscribe(
      (data:softlock[])=>{
        console.log(this.locks);
        this.locks=data},
      ()=>this.locks=[] 
   )
  }

}

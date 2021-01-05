import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
username:String;
  constructor(private log:LogService,private router:Router) { }

  ngOnInit(): void {
      this.username=this.log.username;
  }

  logout(){
      this.log.logout();
      window.location.reload();
  }

}

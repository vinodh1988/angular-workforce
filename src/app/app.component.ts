import { Component, AfterViewInit } from '@angular/core';
import { LogService } from './services/log.service';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
       constructor(private log:LogService,private router:Router){
             
       }
//it will execute after constructor, first ui rendering, only once
      ngAfterViewInit(){
      
           
              if(!this.log.getStatus()){
                
                 this.router.navigate(['login'])
              }
              else{
                if(this.log.usertype=="manager")
                  this.router.navigate(['manager/home']);
                else
                  this.router.navigate(['wfm/home']);
              }
      }
       


}

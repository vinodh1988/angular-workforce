import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';
import PubSub from 'pubsub-js'
interface User {
  username:string;
  usertype:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string="";
 password:string="";
 error:string;
 status:boolean=false;
  constructor(private log:LogService,private route:Router) { }

  ngOnInit(): void {
    PubSub.subscribe('log-error',(e,data)=>
       this.error="Invalid login credentials"
    )
  }

  login():void{
    this.error="";
    if(this.username.length==0 || this.password.length==0)
    this.error="Fill all the fields";
    else{
      this.status=true;
      this.log.login(this.username,this.password).subscribe(
           (user:User)=>{
             sessionStorage.setItem("username",user.username);
             sessionStorage.setItem("usertype",user.usertype);
             this.log.username=user.username;
             this.log.usertype=user.usertype;
             this.status=false;
             if(user.usertype=="manager")
                 this.route.navigate(['manager/home']);
             else
                 this.route.navigate(['wfm/home']);
           },
           ()=>{
             this.error="Invalid Credentials";
             this.status=false;
           }
      )
          }
  }

}

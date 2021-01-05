import { Component, OnInit } from '@angular/core';
import { employee, skills, profile } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent implements OnInit {
type:string;
pattern:string;
skills:skills[];
profiles:profile[];

employees:employee[];


  constructor(private es:EmployeeService) { }

  ngOnInit(): void {
     this.readData();
  }

  readMulti(value,type){
    this.pattern=value;
    this.type=type;
    console.log(this.pattern,this.type)
  }

  readData():void{
    this.es.getEmployees().subscribe(
      (data:employee[])=>this.employees=data,
      ()=>this.employees=[]
    )

    this.es.getSkills().subscribe(
       (data:any)=>this.skills=data._embedded.skills,
       ()=>this.skills=[]
    )

    this.es.getProfiles().subscribe(
      (data:any)=>this.profiles=data._embedded.profiles,
      ()=>this.profiles=[]
   )
  }

}

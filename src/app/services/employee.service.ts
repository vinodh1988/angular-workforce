import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.log.authstring
      })
    }
  }

  getEmployees():Observable<object>{
   
     return this.http.get("http://localhost:8889/endpoints/employees",this.httpOptions);
  }

  getSkills():Observable<object>{
    return this.http.get("http://localhost:8889/skills",this.httpOptions);
 
  }

  getProfiles():Observable<object>{
    return this.http.get("http://localhost:8889/profiles",this.httpOptions);
 
  }
}

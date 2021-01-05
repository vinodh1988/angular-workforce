import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './log.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftlockService {
  httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.log.authstring
      })
    }
  }

  sendRequest(data):Observable<object>{
     return this.http.post("http://localhost:8889/endpoints/softlock",data,this.httpOptions);
  }

  
  updateRequest(data):Observable<object>{
    return this.http.put("http://localhost:8889/endpoints/softlock",data,this.httpOptions);
 }
  getLocks():Observable<object>{
     return this.http.get("http://localhost:8889/endpoints/waiting-locks",this.httpOptions);  
  }

  getInactiveLocks():Observable<object>{
    return this.http.get("http://localhost:8889/endpoints/inactive-locks",this.httpOptions);  
 }

 getmanagerLocks():Observable<object>{
  return this.http.get("http://localhost:8889/endpoints/manager-locks",this.httpOptions);  
 }

 getApprovedLocks():Observable<object>{
  return this.http.get("http://localhost:8889/endpoints/approved-locks",this.httpOptions);  
 }

}

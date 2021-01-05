import { Pipe, PipeTransform } from '@angular/core';
import { employee } from '../model/employee';

@Pipe({
  name: 'filteremp'
})
export class FilterempPipe implements PipeTransform {

  transform(employees:employee[], type:string,value:any):employee[]  {
     console.log(type,value);
     if(type=="name"){
       let regex=new RegExp(value.toLowerCase());
        return employees.filter(x=>regex.test(x.name.toLowerCase()));
     }
     if(type=="id"){
       if(value=="")
       return employees;
       return employees.filter(x=>(x.employee_id==value));
     }

     if(type=="years"){
       if(value=="" || value==undefined)
        return employees;
       return employees.filter(x=>x.experience==value);
     }
     if(type=="skills"){
      
       if(value.length==0)
          return employees;
         return  employees.filter(x=>{
          let match=0;
               for(let temp in x.skills){
                
                     for(let y in value){
                       
                       if(value[y]==x.skills[temp].name){
                         match++;
                         break;
                       }
                     }
                   
               }
               
               if(match>=value.length/2)
                  return true;
               else 
                  return false;
           })
            
        }
     
       return employees;
     }
   
}

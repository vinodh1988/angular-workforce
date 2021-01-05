import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { employee } from 'src/app/model/employee';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent  {
@Input() employees:employee[];
@Input() profiles: any[];
groups:any[];
view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showDataLabel:boolean=true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Profiles';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Number of Employees';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

ngOnChanges(){
  console.log("Running...!!!")
  let range=[[0,3],[3,7],[7,11]];
  let rangeString=["0-3 years","3-7 years","7-11 years"]
            if(this.profiles)
               this.groups=[];  
                for(let x in this.profiles){
                  this.groups[x]={
                    name: this.profiles[x].name,
                    series:[]
                    }; 
                  for(let i=0;i<3;i++){        
                    let count=0;
                        for(let y in this.employees){
                        console.log(this.employees[y].experience, (this.employees[y].experience>=range[i][0]
                          &&this.employees[y].experience<=range[i][1]))
                             if((this.employees[y].experience>=range[i][0]
                              &&this.employees[y].experience<=range[i][1])){
                               
                                    if(this.employees[y].profile.name==this.profiles[x].name)
                                      count++;
                            
                        }
                    
                  }
                  this.groups[x].series[i]={name: rangeString[i],value:count};
              }
            
   
}
console.log(this.groups);
}

}
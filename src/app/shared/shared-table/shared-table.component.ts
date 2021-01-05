import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { softlock } from 'src/app/model/softlock';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css']
})
export class SharedTableComponent implements OnInit {
  displayedColumns: string[] = ['Employee_id', 'Manager','Handled By','Requestee', 
  'Request Date', 'Manager','Request Date','Last Update','Request Message','Remarks','Status'];
  @Input("locks") lockdata:softlock[];
   datasource;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.datasource=new MatTableDataSource<softlock>(this.lockdata);
    this.datasource.paginator=this.paginator;
  }

}

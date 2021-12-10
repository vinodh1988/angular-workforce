import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { SharedModule } from '../shared/shared.module';
import { EmptableComponent, RequestDialog } from './emptable/emptable.component';
import { FilterempPipe } from '../pipes/filteremp.pipe';
import { ManagerhistoryComponent } from './managerhistory/managerhistory.component';
import { ApprovedComponent } from './approved/approved.component';
import { AcceptTableComponent } from './accept-table/accept-table.component';
import { AcceptDialogComponent } from './accept-table/accept-dialog/accept-dialog.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
/*Comment*/
const route:Routes=[
  {path:"home",component:ManagerhomeComponent},
  {path:"history",component:ManagerhistoryComponent},
  {path:"approved",component:ApprovedComponent}
]
/* Comment */
@NgModule({
  declarations: [ManagerhomeComponent, EmptableComponent,RequestDialog,
  FilterempPipe,
  ManagerhistoryComponent,
  ApprovedComponent,
  AcceptTableComponent,
  AcceptDialogComponent,
  BarchartComponent],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(route),SharedModule,AngmaterialModule,NgxChartsModule
  ],
  
})
export class ManagerModule { }

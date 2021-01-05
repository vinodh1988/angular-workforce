import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WfmhomeComponent } from './wfmhome/wfmhome.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import {WaitingRequestsComponent} from './waiting-requests/waiting-requests.component';
import { ApproveTableComponent } from './approve-table/approve-table.component';
import { ApproveDailogComponent } from './approve-table/approve-dailog/approve-dailog.component';
import { WfmhistoryComponent } from './wfmhistory/wfmhistory.component'

const route:Routes=[
   {path:"home",component:WfmhomeComponent,
     children:[
       {path:"", component:WaitingRequestsComponent,outlet:"wfm"},
      
     ]
    },

    {path:"history",component:WfmhistoryComponent}
]



@NgModule({
  declarations: [
    WfmhomeComponent,
    ApproveTableComponent,
    WaitingRequestsComponent,
    ApproveDailogComponent,
    WfmhistoryComponent
  ],
  imports: [
    
    CommonModule,FormsModule,
    RouterModule.forChild(route),SharedModule,AngmaterialModule
  ]
})
export class WfmModule { }

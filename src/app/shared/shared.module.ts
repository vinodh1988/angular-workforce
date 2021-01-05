import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { SharedTableComponent } from './shared-table/shared-table.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SharedTableComponent
  ],
  imports: [
    CommonModule,AngmaterialModule
  ],
  exports:[
       ToolbarComponent,SharedTableComponent
  ]
})
export class SharedModule { }

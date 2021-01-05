import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"wfm",
  loadChildren:() => import('./wfm/wfm.module').then(m => m.WfmModule)},
  {path:"manager",loadChildren: 
  () => import('./manager/manager.module').then(m => m.ManagerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

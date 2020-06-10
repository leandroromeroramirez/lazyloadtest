import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MegalandComponent } from './megaland.component';


const routes: Routes = [
  {
    path: '', component: MegalandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MegalandRoutingModule { }

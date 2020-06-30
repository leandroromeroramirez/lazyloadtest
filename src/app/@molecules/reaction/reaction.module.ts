import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionComponent } from './reaction.component';



@NgModule({
  declarations: [ReactionComponent],
  exports: [
    ReactionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReactionModule { }

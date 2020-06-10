import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';


@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    SectionRoutingModule
  ],
  exports: [

  ]
})
export class SectionModule { }

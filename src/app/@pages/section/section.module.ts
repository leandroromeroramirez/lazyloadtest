import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { SectionNoteComponent } from './@pages/section-note/section-note.component';
import { RcnNoteModule } from '../../@organisms/note/note.module';
import { ReactionModule } from '../../@molecules/reaction/reaction.module';
import { SectionHomeComponent } from './@pages/section-home/section-home.component';


@NgModule({
  declarations: [SectionComponent, SectionNoteComponent, SectionHomeComponent],
  imports: [
    CommonModule,
    RcnNoteModule,
    SectionRoutingModule,
    ReactionModule
  ],
  exports: [

  ]
})
export class SectionModule { }

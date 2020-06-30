import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';
import { SectionNoteComponent } from './@pages/section-note/section-note.component';
import { SectionHomeComponent } from './@pages/section-home/section-home.component';


const routes: Routes = [

  {
    path: '',
    component: SectionComponent,
    children: [{
      path: '',
      component: SectionHomeComponent
    },{
      path: 'hola-mundo',
      component: SectionNoteComponent
    }, {
      path: ':note',
      component: SectionNoteComponent
    }, ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegalandRoutingModule } from './megaland-routing.module';
import { MegalandComponent } from './megaland.component';
import { OrganismsModule } from '../../@organisms/organisms.module';



const MEG_COMPONENTS = [
  MegalandComponent
];

@NgModule({
  declarations: [...MEG_COMPONENTS],
  imports: [
    CommonModule,
    MegalandRoutingModule,
    OrganismsModule
  ],
  entryComponents: [...MEG_COMPONENTS]
})
export class MegalandModule { }

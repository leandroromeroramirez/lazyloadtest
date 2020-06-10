import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoleculesRoutingModule } from './molecules-routing.module';
import { ArtistMegalandComponent } from './artist-megaland/artist-megaland.component';

const MOL_COMPONENTS = [
  ArtistMegalandComponent
];

@NgModule({
  declarations: [...MOL_COMPONENTS],
  imports: [
    CommonModule,
    MoleculesRoutingModule
  ],
  exports: [...MOL_COMPONENTS]
})
export class MoleculesModule { }

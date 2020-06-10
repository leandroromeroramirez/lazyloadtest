import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { RadiocamComponent } from './radiocam/radiocam.component';
import { BlockArtistsMegalandComponent } from './block-artists-megaland/block-artists-megaland.component';
import { KeepHtmlPipe } from '../@pipes/keep-html.pipe';
import { YoutubePipe } from '../@pipes/youtube.pipe';


import { OrganismsRoutingModule } from './organisms-routing.module';
import { BlockStreamingMegalandComponent } from './block-streaming-megaland/block-streaming-megaland.component';
import { MoleculesModule } from '../@molecules/molecules.module';

const ORG_COMPONENTS = [
  BlockStreamingMegalandComponent,
  RadiocamComponent,
  BlockArtistsMegalandComponent,
  KeepHtmlPipe,
  YoutubePipe
];

@NgModule({
  declarations: [...ORG_COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    OrganismsRoutingModule,
    MoleculesModule
  ],
  exports: [
    ...ORG_COMPONENTS
  ]
})
export class OrganismsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteImgComponent } from './components/note-img/note-img.component';
import { NoteBodyComponent } from './components/note-body/note-body.component';
import { NoteComponent } from './note.component';



@NgModule({
  declarations: [NoteImgComponent, NoteBodyComponent, NoteComponent],
  exports: [
    NoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RcnNoteModule { }

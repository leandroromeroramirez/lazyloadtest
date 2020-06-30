import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-img',
  templateUrl: './note-img.component.html',
  styleUrls: ['./note-img.component.css']
})
export class NoteImgComponent implements OnInit {
   @Input('note-img') img;

  constructor() { }

  ngOnInit(): void {
  }

}

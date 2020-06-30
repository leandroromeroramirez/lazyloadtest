import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-body',
  templateUrl: './note-body.component.html',
  styleUrls: ['./note-body.component.css']
})
export class NoteBodyComponent implements OnInit {
  @Input('note-body') body: string;

  constructor() { }

  ngOnInit(): void {
  }

}

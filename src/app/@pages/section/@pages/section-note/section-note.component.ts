import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../../../@service/restful.service';

@Component({
  selector: 'app-section-note',
  templateUrl: './section-note.component.html',
  styleUrls: ['./section-note.component.css']
})
export class SectionNoteComponent implements OnInit {

  currentNote;

  constructor(
    private restFullService: RestfulService
  ) { }

  ngOnInit(): void {
    this.currentNote = this.restFullService.note;
    console.log('Section Note');
  }

  sendReaction(event: {reactionName: string; vote: number}) {
    // TODO: call restfull service to post reaction
    console.log(event);
  }
}

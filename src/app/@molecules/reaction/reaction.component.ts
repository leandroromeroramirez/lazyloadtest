import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit {

  @Input('reaction-counter') counter;
  @Output() reaction = new EventEmitter<{ reactionName: string, vote: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  vote(item) {
    this.reaction.emit({reactionName: item.name, vote: item.votes++});
  }
}

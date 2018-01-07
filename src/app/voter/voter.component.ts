import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name: string;
  @Output() vote = new EventEmitter<string>();

  disabled: boolean = false;

  constructor() { }

  voted(color: string) {
    this.vote.emit(color);
    this.disabled = true;
  }

  ngOnInit() {
  }

}
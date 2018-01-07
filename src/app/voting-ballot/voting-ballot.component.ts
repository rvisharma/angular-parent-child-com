import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-ballot',
  templateUrl: './voting-ballot.component.html',
  styleUrls: ['./voting-ballot.component.css']
})
export class VotingBallotComponent {
  red = 0;
  black = 0;

  voters: Array<{ name: string }> = [
    { name: 'Ravi' },
    { name: 'Sharma' },
    { name: 'Rvi' }
  ];

  handleVote = (color: string) => {
    if (color === 'red') {
      this.red++;
    } else {
      this.black++
    }
  }
}
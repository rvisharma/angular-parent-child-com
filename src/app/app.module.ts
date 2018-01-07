import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { VotingBallotComponent } from './voting-ballot/voting-ballot.component';
import { CounterComponent } from './counter/counter.component';
import { CounterInterfaceComponent } from './counter-interface/counter-interface.component';
import { CounterVcComponent } from './counter-vc/counter-vc.component';
import { MovieAnswerParentComponent } from './movie-answer/movie-answer-parent/movie-answer-parent.component';
import { MovieAnswerChildComponent } from './movie-answer/movie-answer-child/movie-answer-child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VoterComponent, VotingBallotComponent, CounterComponent, CounterInterfaceComponent, CounterVcComponent, MovieAnswerParentComponent, MovieAnswerChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

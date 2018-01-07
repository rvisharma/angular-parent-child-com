import { Component, Input, OnDestroy } from '@angular/core';
import { MovieService, MovieAnswer } from '../movie.service';

@Component({
  selector: 'app-movie-answer-child',
  templateUrl: './movie-answer-child.component.html',
  styleUrls: ['./movie-answer-child.component.css']
})
export class MovieAnswerChildComponent implements OnDestroy {

  @Input() users: string[];

  public answered: { [name: string]: boolean } = {};
  public reset$;

  constructor(public mv: MovieService) {
    this.reset$ = mv.reset$.subscribe(() => this.answered = {});
  }

  answer(name: string, answer: false) {
    this.answered[name] = true;
    this.mv.answer({
      name,
      answer,
    })
  }

  ngOnDestroy() {
    this.reset$.unsubscribe();
  }
}
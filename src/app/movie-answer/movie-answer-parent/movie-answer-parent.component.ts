import { Component, OnInit } from '@angular/core';
import { MovieService, MovieAnswer } from '../movie.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-answer-parent',
  templateUrl: './movie-answer-parent.component.html',
  styleUrls: ['./movie-answer-parent.component.css'],
  providers: [MovieService]
})
export class MovieAnswerParentComponent implements OnInit {

  public log$: Observable<string[]>;
  public answer$: Observable<MovieAnswer>;

  public users: string[] = ['R','V','I'];

  constructor(private mv: MovieService) {
    this.log$ = mv.movieLog$;
    this.answer$ = mv.movieAnswer$;
    // mv.answer({name:'qqq', answer:false})
  }

  reset(){
    this.mv.reset();
  }


  ngOnInit() {
  }

}
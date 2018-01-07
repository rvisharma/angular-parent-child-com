import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

export interface MovieAnswer{
  name: string;
  answer: boolean;
}


@Injectable()
export class MovieService {

  constructor() { }
  private logs: string[];
  private movieLogSubject = new BehaviorSubject<string[]>([]);
  private movieAnswerSubject = new Subject<MovieAnswer>();
  private resetSubject= new Subject();

  public answered : {[name: string]: boolean} = {};

  movieLog$ = this.movieLogSubject.asObservable();
  movieAnswer$ = this.movieAnswerSubject.asObservable();
  reset$ = this.resetSubject.asObservable();

  public reset = () =>{
    this.logs = [];
    this.movieLogSubject.next(this.logs);
    this.resetSubject.next();
  }

  answer(movieAnswer: MovieAnswer){
    let log= `${movieAnswer.name} said ${movieAnswer.answer ? 'Yes :-)' : 'No :-('}`;
    this.logs = [log, ...this.logs];
    this.movieAnswerSubject.next(movieAnswer);
    this.movieLogSubject.next(this.logs);
  }

}
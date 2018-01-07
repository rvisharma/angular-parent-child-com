import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-interface',
  templateUrl: './counter-interface.component.html',
  styleUrls: ['./counter-interface.component.css']
})
export class CounterInterfaceComponent implements OnInit {

  count = 0;

  constructor() { }

  inc(){
    this.count++;
  }
  dec(){
    this.count--;
  }

  ngOnInit() {
  }

}
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {CounterInterfaceComponent} from '../counter-interface/counter-interface.component';


@Component({
  selector: 'app-counter-vc',
  templateUrl: './counter-vc.component.html',
  styleUrls: ['./counter-vc.component.css']
})
export class CounterVcComponent implements AfterViewInit {

  @ViewChild(CounterInterfaceComponent) counterInstance: CounterInterfaceComponent;

  count = (): number | string => 'waiting...';

  ngAfterViewInit() {
    setTimeout(()=>{
      this.count = () => this.counterInstance.count;
    },0)
  }

  inc(){
    this.counterInstance.inc();

  }
  dec(){
    this.counterInstance.dec();
  }



}
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component  {
  @Input()
  count: number = 0;
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  increment() {
    this.count++;
    console.log("arise");
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
}

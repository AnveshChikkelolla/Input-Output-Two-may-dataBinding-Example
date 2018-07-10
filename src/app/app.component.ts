import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  initialCount: number = 10;
  countChange(event) {
    console.log("called");
    this.initialCount = event;
  }
}

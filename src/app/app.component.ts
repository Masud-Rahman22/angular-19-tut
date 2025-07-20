import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-tut';
  handleClickEvent() {
    console.log('Button clicked!');
    this.otherFunction();
  }
  otherFunction(){
    console.log('This is another function');
  }
}

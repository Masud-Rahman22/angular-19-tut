import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-19-tut';
  count = 0;
  handleCount(val='string'){
    if(val=='minus'){
      this.count = this.count - 1;
    }
    else if(val=='plus'){
      this.count = this.count + 1;
    }
    else if(val=='reset'){
      this.count = 0;
    }
  }
}

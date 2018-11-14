import { Component } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newtestapp';
  result = 0;

  assignValue() {
    this.result = 10;
  }

  sum(a,b):number {
    return a+b;
  }

  
}



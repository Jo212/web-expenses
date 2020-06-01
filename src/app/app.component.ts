import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <pm-expenses></pm-expenses>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'My Expenses';
}

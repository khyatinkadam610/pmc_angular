import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <div>
  <h1>{{pageTitle}}</h1>
  <div>Mt First Component</div>
  </div>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Project Management';
}
//demo comment
//Hi this is AppComponent

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="height:100px;width:100%">app.component</div>


  <div class="container">
  <app-user-list class="item1">

  
  </app-user-list>
  
  
  
  <app-user-detail class="item2"></app-user-detail>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}

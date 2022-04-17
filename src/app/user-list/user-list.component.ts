import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <div>user-list
    <app-user-single></app-user-single>
    <app-user-single></app-user-single>
    <app-user-single></app-user-single>
  </div>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

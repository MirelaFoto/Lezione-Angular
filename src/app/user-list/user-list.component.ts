import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-user-list',
  template: `
  <div class="all">
  <div>user-list
    <app-user-single (show)="display=true"></app-user-single>
    <app-user-single (show)="display=true"></app-user-single>
    <app-user-single (show)="display=true"></app-user-single>
  </div>
  <app-user-detail class="item2" *ngIf="display" (close)="display=false"
   > </app-user-detail> </div>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  display:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

@Output() show:EventEmitter<any>= new EventEmitter()
}


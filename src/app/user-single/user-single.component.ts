import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }
@Input() display!:boolean;

@Output() show= new EventEmitter()
  

 
}

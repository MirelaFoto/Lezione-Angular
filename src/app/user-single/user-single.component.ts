import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../user-list/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() item!:IUser;
  @Input() index!:number ;

  @Output()
  click :EventEmitter<any> = new EventEmitter<any>();

 onClick(){
   this.click.emit(this.item)
  
  

 }

 
  
  constructor() { }

  ngOnInit(): void {
  }

}

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
show:boolean = true;
  @Output()
  clickedButton :EventEmitter<string> = new EventEmitter<string>();

 onDelete(){
   this.clickedButton.emit('You deleted the image!')
  
   this.show= false;

 }

 
  
  constructor() { }

  ngOnInit(): void {
  }

}

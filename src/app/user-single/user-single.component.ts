import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../user-list/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  ngOnInit(): void {
   
  }
  
  @Input() item!:IUser;
  @Input() index!:number ;

  @Output() delete:EventEmitter<any> =  new EventEmitter<any>();

 onClick():void{
 this.delete.emit(this.item)
}

 }
 
  



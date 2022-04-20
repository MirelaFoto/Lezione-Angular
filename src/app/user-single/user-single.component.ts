import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { IUser, Role } from '../user-list/user';

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
color='';

  colorBy (color:string): any{
 

    if (this.item.role == Role.ADMIN){
     return color ='red'
    }
    else if(this.item.role  == Role.STAFF){
     return color ='blue'

     }
     else(this.item.role  == Role.MANAGER);{
     return color ='green'

     }


}

 
  
  constructor() { }

  ngOnInit(): void {
  }

}

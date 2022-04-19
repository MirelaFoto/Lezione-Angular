import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../user-list/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() item!:IUser;
  @Input() index!:number ;

  constructor() { }

  ngOnInit(): void {
  }

}

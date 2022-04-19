import { Component, OnInit } from '@angular/core';
import { Gender, IUser,Role } from './user';

@Component({
  selector: 'app-user-list',
  template: `
  <app-user-single *ngFor= "let key of User, let i = index;" [index]='i' [item]='key' > </app-user-single>


  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
 User :IUser[] =[
  {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100'
    },
    role: Role.STAFF,
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    gender: Gender.MALE
  },
  {
    id: 12312,
    name: 'Maria',
    surname: 'Rossa',
    age: 26,
    dateOfBirth: '1994-10-11',
    address: {
      city: 'Palermo',
      street: 'Via Palermo 10',
      postalCode: '90100'
    },
    role:Role.MANAGER,
    gender: Gender.FEMALE,
    username: 'MariaRossa94',
    profilePhotoUrl: 'https://bit.ly/3DWWxuj',
    
  },
  {
    id: 45645,
    name: 'Elis',
    surname: 'Miao',
    age: 5,
    dateOfBirth: '2016-05-08',
    address: {
      city: 'Palermo',
      street: 'Via Palermo 120',
      postalCode: '90100'
    },
    role:Role.STAFF,
    gender: Gender.MALE,
    username: 'ElisMiao',
    profilePhotoUrl: 'https://bit.ly/3zU6iH3',
 
  }
];




  constructor() { }

  ngOnInit(): void {
  }

}

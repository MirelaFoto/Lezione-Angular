import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
 

 user = {
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

  role: 'staff',
  username: 'MarioRossi80',
  profilePhotoUrl: 'https://bit.ly/3yRngEP',
  companies: [{
      id: 148979,
      name: 'Develhope',
      description: 'La migliore',
      location: {
          city: 'Palermo',
          street: 'Via Libertà 58',
          postalCode: '90139'
      }
  },
  {
      id: 123123,
      name: 'Apple',
      description: 'E insomma...',
      location: {
          city: 'Cupertino',
          street: 'One Apple Park Way',
          postalCode: '95014'
      }
  }
  ],
  gender:'male'
  
 
}


  }
  



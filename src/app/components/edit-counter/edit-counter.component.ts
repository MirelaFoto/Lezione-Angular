import { Component, OnInit } from '@angular/core';
import { ContatoreService } from 'src/app/contatore/services/contatore.service';
@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
     num:number=1;

  constructor(private contatoreService:ContatoreService) { }

  ngOnInit(): void {
  }
  inputValue: number = 1;

  

  add(): void {
    this.contatoreService.addContatore(this.num);
  }

  sub(): void {
    this.contatoreService.subContatore(this.num);
  }

}

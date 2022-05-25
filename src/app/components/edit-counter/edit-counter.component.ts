import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
num:number=1;

  constructor(private contatoreService:Contatoreservice) { }

  ngOnInit(): void {
  }
  add(): void {
    ;
  }
  substract(): void {
    
  }
}

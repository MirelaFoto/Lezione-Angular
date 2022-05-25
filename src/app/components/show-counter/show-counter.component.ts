import { Component, OnInit } from '@angular/core';
import { ContatoreService } from 'src/app/contatore/services/contatore.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  constructor(private contatoreService : ContatoreService) { }

  ngOnInit(): void {
  }

  getContatore(): number {
    return this.contatoreService.getcontatore();
  }

 showError(): boolean {
    return this.contatoreService.getErrorMsg();
  }

}
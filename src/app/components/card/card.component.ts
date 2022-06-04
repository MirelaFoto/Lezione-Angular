import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IBeer } from 'src/app/models/beer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() beer!: IBeer;
}

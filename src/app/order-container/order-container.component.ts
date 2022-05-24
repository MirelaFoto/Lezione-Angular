import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}

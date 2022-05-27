import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor() { }

  
  @Input() inviaLike!: boolean;
  @Input() joke!: [string, string] | undefined;
  @Input() index!: number;
  @Output() changePreference: EventEmitter<number> = new EventEmitter<number>();
  inviaReaction!: 'Like' | 'Dislike';

  

  ngOnInit(): void {
    if (this.inviaLike) {
      this.inviaReaction = 'Dislike';
    } else {
      this.inviaReaction = 'Like';
    }
  }

}


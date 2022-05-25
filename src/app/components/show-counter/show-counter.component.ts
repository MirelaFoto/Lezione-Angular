import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContatoreService } from 'src/app/contatore/services/contatore.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
  contatore$!: number;
  error!: boolean;
  sub: Subscription[] = [];


  constructor(private contatoreService : ContatoreService) { }

  ngOnInit(): void {
    this.sub.push(
      this.contatoreService.getContatore()
        .subscribe((res: number) => {
          this.contatore$ = res;
        })
    );
    this.sub.push(
      this.contatoreService.getErrorMsg()
        .subscribe((res: boolean) => {
          this.error = res;
        })
    );
  }

 

  ngOnDestroy(): void {
    this.sub.forEach((ele: Subscription) => {
      ele.unsubscribe();
    });
  }

}
 


import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.services';
import { IBeer } from 'src/app/models/beer';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
  
})
export class ShopComponent implements OnInit, OnDestroy {
  beerArr!: IBeer[];
lastBeer!: IBeer | undefined;
  sub: Subscription[] = [];
  filteredType!: "small" | "medium";

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.sub.push(
      this.beerService.getBeerArray()
        .subscribe((res: IBeer[]) => {
          this.beerArr = res;
        })
    );
    this.sub.push(
      this.beerService.getLastBeerSubject()
        .subscribe((res: IBeer | undefined) => {
          this.lastBeer = res;
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.forEach((item: Subscription) => {
     item.unsubscribe();
    });
  }

  search(f: NgForm): void {
    this.beerService.getOneBeer(Number(f.value.name));
    this.filteredType = f.value.type;
  }

}

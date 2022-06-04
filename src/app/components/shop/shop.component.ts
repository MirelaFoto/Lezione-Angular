
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.services';
import { IBeer } from 'src/app/models/beer';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl:'./shop.component.html'})



export class ShopComponent implements OnInit, OnDestroy {
  beerArr!: IBeer[];
  myBeer!: IBeer | undefined;
  subscriptions: Subscription[] = [];
  filter!: "small" | "medium";

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.beerService.getList()
        .subscribe((res: IBeer[]) => {
          this.beerArr = res;
        })
    );
    this.subscriptions.push(
      this.beerService.getCurrentBeerSubject()
        .subscribe((res: IBeer | undefined) => {
          this.myBeer = res;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  search(f: NgForm): void {
    this.beerService.getCurrentBeer(Number(f.value.name));
    this.filter = f.value.type;
  }

}
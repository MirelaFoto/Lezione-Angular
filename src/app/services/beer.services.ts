import { Injectable } from '@angular/core';
import { IBeer } from '../models/beer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beerArr: IBeer[]  = [
    {
      id: 1,
      type:'small',
      name: 'Beer-01',
      price: 12
    },
    {
      id: 2,
      type: 'small',
      name: 'Beer-02',
      price: 5
    },
    {
      id: 3,
      type: 'small',
      name: 'Beer-03',
      price: 9
    },
    {
      id: 4,
      type: 'small',
      name: 'Beer-04',
      price: 3
    },
    {
      id: 5,
      type: 'medium',
      name: 'Beer-05',
      price: 11
    },
    {
      id: 6,
      type: 'medium',
      name: 'Beer-06',
      price: 13
    },
    {
      id: 7,
      type: 'small',
      name: 'Beer-07',
      price: 4
    },
    {
      id: 8,
      type: 'small',
      name: 'Beer-08',
      price: 1
    },
    {
      id: 9,
      type: 'small',
      name: 'Beer-09',
      price: 3
    },
    {
      id: 10,
      type: 'medium',
      name: 'Beer-010',
      price: 15
    }
  ];

  beerSubject: BehaviorSubject<IBeer[]> = new BehaviorSubject<IBeer[]>(this.beerArr);
  lastBeerSubject: BehaviorSubject<IBeer | undefined> = new BehaviorSubject<IBeer | undefined>(undefined);

  constructor() { }

  getBeerArray(): Observable<IBeer[]> {
    return this.beerSubject.asObservable();
  }

  getLastBeerSubject(): Observable<IBeer | undefined> {
    return this.lastBeerSubject.asObservable();
  }

  getOneBeer(id: number): void {
    this.lastBeerSubject.next(this.beerArr.find((beer: IBeer) => beer.id === id));
  }

}

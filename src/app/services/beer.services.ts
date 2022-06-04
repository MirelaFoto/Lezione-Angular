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
      price: 6
    },
    {
      id: 2,
      type: 'small',
      name: 'Beer-02',
      price: 7
    },
    {
      id: 3,
      type: 'small',
      name: 'Beer-03',
      price: 12
    },
    {
      id: 4,
      type: 'small',
      name: 'Beer-04',
      price: 4
    },
    {
      id: 5,
      type: 'medium',
      name: 'Beer-05',
      price: 15
    },
    {
      id: 6,
      type: 'medium',
      name: 'Beer-06',
      price: 11
    },
    {
      id: 7,
      type: 'small',
      name: 'Beer-07',
      price: 15
    },
    {
      id: 8,
      type: 'small',
      name: 'Beer-08',
      price: 2
    },
    {
      id: 9,
      type: 'small',
      name: 'Beer-09',
      price: 12
    },
    {
      id: 10,
      type: 'medium',
      name: 'Beer-010',
      price: 4
    }
  ];
beer:IBeer[]=[]
  

  beerList$: BehaviorSubject<IBeer[]> = new BehaviorSubject<IBeer[]>(this.beerArr);
 myBeer$: BehaviorSubject<IBeer | undefined> = new BehaviorSubject<IBeer | undefined>(undefined);

  constructor() { }

  getList(): Observable<IBeer[]> {
    return this.beerList$.asObservable();
  }

  getCurrentBeerSubject(): Observable<IBeer | undefined> {
    return this.myBeer$.asObservable();
  }

  getCurrentBeer(id: number): void {
    this.myBeer$.next(this.beerArr.find((beer: IBeer) => beer.id === id));
  }




  
}

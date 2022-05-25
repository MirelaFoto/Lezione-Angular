import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoreService {


  private counter = 0;

  constructor() { }


  getCounter():number{
    return this.counter;
  }

addCounter(item: number = 1): void {
    if (this.counter-item < 0) {
      console.log('Errore, Il valore non puo diventare negativo!');
      
    } else {
      this.counter += item;
      console.log(this.counter);
     
    }
  }

  subCounter(item: number = 1):void{
    if (this.counter -item < 0) {
      console.log('Errore, Il valore  non puo diventare negativo!');
      
    } else {
      this.counter -= item;
      console.log(this.counter);
      
    }
  }
}

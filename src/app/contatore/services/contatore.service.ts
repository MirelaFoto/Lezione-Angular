import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoreService {
  private contatore: number = 0;

  private errorMsg: boolean = false;

  constructor() { }

  getcontatore(): number {
    return this.contatore;
  }

  getErrorMsg(): boolean {
    return this.errorMsg;
  }

  addContatore(number: number = 1): void {
    if (this.contatore + number >0) {
      this.contatore += number;
      console.log(this.contatore);
      this.errorMsg = false;
      
    } else {
      
      console.log('Errore, il valore non puo essere negativo');
      this.errorMsg = true;
    }
  }

subContatore(number: number = 1): void {
    if (this.contatore - number >0) {
      this.contatore -= number;
      console.log(this.contatore);
      this.errorMsg= false;
     
    } else {
      console.log('Errore, il valore non puo essere negativo');
      this.errorMsg = true;
    }
  }
}

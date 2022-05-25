import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoreService {
  private contatore: number = 0;

  contatore$: BehaviorSubject<number> = new BehaviorSubject<number>(this.contatore);
  errore$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getContatore():Observable<number>{
    return this.contatore$.asObservable();
  }
 
  getErrorMsg(): Observable<boolean> {
    return this.errore$.asObservable();
  }

  addContatore(number: number = 1): void {
    if (this.contatore + number >0) {
      this.contatore += number;
      this.contatore$.next(this.contatore);
    this.errore$.next(false);
      
    } else {
      
      this.errore$.next(true)
    }
  }

subContatore(number: number = 1): void {
    if (this.contatore - number >0) {
      this.contatore -= number;
      this.contatore$.next(this.contatore);
      this.errore$.next(false);
     
    } else {
     
      this.errore$.next(true)
    }
  }
}
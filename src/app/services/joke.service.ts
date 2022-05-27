import { Injectable } from '@angular/core';
import {ApiService } from 'src/app/services/api.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class JokeService {
  jokeSubject: BehaviorSubject<[string, string] | undefined> = new BehaviorSubject<[string, string] | undefined>(undefined);

  constructor(private apiService: ApiService) { }

  getJokes(): Observable<[string, string] | undefined> {
    return this.jokeSubject.asObservable();
  }

  newJoke(): void {
    const subscription: Subscription = this.apiService.getJoke()
      .subscribe((res: any) => {
        this.jokeSubject.next([res.setup, res.delivery]);
        subscription.unsubscribe();
      });
  }

}
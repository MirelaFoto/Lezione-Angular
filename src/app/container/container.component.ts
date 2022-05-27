import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{ JokeService} from 'src/app/services/joke.service'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy  {



  sub!: Subscription;
  lastJoke: [string, string] | undefined = undefined;
  likedJokes: [string, string][] = [];
  dislikedJokes: [string, string][] = [];
  able : boolean = false;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.sub = this.jokeService.getJokes()
      .subscribe((res: [string, string] | undefined) => {
        this.lastJoke = res;
        this.able = true;
      });
    setInterval(() => {
      this.jokeService.newJoke();
    }, 5000);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  like(joke: [string, string] | undefined): void {
    if (joke) {
      this.able = false;
      this.likedJokes.push(joke);
    }
  }

  dislike(joke: [string, string] | undefined): void {
    if (joke) {
      this.able = false;
      this.dislikedJokes.push(joke);
    }
  }

  likeToDislike(index: number): void {
    this.dislikedJokes.push(...this.likedJokes.splice(index - 1, 1));
  }

  dislikeToLike(index: number): void {
    this.likedJokes.push(...this.dislikedJokes.splice(index - 1, 1));
  }

}

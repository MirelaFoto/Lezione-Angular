import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  sub!: Subscription;   
  data: [string, string][] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.sub = this.api.getData()
      .subscribe((res: any) => {
        Object.keys(res).forEach((item: string) => {
          this.data.push([item, res[item].Path]);
        });
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
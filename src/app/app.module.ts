import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ShowCounterComponent } from './components/show-counter/show-counter.component';
import { EditCounterComponent } from './components/edit-counter/edit-counter.component';
=======
import { CounterComponent } from './contatore/counter/counter.component';
>>>>>>> esercizio9.1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ShowCounterComponent,
    EditCounterComponent
=======
    CounterComponent
>>>>>>> esercizio9.1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

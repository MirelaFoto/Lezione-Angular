import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShowCounterComponent } from './components/show-counter/show-counter.component';
import { EditCounterComponent } from './components/edit-counter/edit-counter.component';




@NgModule({
  declarations: [
    AppComponent,

    ShowCounterComponent,
    EditCounterComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

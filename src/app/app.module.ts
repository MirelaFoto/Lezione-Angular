import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './components/shop/shop.component';
import { CardComponent } from './components/card/card.component';





@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CardComponent,

    

   

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

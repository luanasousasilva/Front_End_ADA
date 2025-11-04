import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "./store/cart.reducer";
import {RouterLink, RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterLink,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot({ cart: cartReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

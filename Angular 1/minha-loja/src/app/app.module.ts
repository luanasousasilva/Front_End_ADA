import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "./store/cart.reducer";

@NgModule({
  declarations: [AppComponent],  // Apenas AppComponent se os outros forem standalone
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

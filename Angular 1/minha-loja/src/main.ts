import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { cartReducer } from "./app/store/cart.reducer";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideStore({ cart: cartReducer }) // <<< Registra o Store globalmente
  ]
}).catch(err => console.error(err));

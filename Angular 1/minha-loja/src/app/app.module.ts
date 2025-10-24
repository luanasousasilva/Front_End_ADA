import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OnSalePipe } from './pipes/on-sale.pipe';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListComponent,
    AppComponent
  ],
  providers: [],
  
})
export class AppModule { }

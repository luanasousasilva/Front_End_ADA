import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent {
  cartItemCount: Observable<number>;

  constructor(private store: Store<{ cart: { items: any[] } }>) {
    this.cartItemCount = this.store.pipe(select(state => state.cart.items.length));
  }
}

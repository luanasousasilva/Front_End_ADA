import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../store/cart.actions';
import { CartItem } from "../../../types";
import { CartState } from '../../store/cart.state';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: Observable<CartItem[]>;
  cartTotal: Observable<number>;
  cartItemCount: Observable<number>;

  constructor(private router: Router, private store: Store<{ cart: CartState }>) {
    this.cartItems = this.store.select(state => state.cart.items);
    this.cartTotal = this.store.select(state => state.cart.total);
    this.cartItemCount = this.store.select(state => state.cart.itemCount);
  }

  removeItem(productId: number) {
    this.store.dispatch(CartActions.removeProductFromCart({ productId }));
  }

  increaseQuantity(productId: number) {
    this.store.dispatch(CartActions.increaseQuantity({ productId }));
  }

  decreaseQuantity(productId: number) {
    this.store.dispatch(CartActions.decreaseQuantity({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterLink, Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as CartActions from '../../store/cart.actions';
import { CartItem } from "../../../types";
import { CartState } from '../../store/cart.state';
import { ConfirmationModalComponent } from "../../../confirmation-modal.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  private modalService = inject(NgbModal);
  private router = inject(Router);
  private store = inject(Store<{ cart: CartState }>);

  cartItems: Observable<CartItem[]>;
  cartTotal: Observable<number>;
  cartItemCount: Observable<number>;

  constructor() {
    this.cartItems = this.store.select(state => state.cart.items);
    this.cartTotal = this.store.select(state => state.cart.total);
    this.cartItemCount = this.store.select(state => state.cart.itemCount);
  }

  async removeItem(productId: number) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);

    try {
      const result = await modalRef.result;
      if (result) {
        this.store.dispatch(CartActions.removeProductFromCart({ productId }));
      }
    } catch (dismissed) {
      // Modal foi fechado sem confirmação
    }
  }

  increaseQuantity(productId: number) {
    this.store.dispatch(CartActions.increaseQuantity({ productId }));
  }

  decreaseQuantity(productId: number) {
    this.store.dispatch(CartActions.decreaseQuantity({ productId }));
  }

  async clearCart() {
    const modalRef = this.modalService.open(ConfirmationModalComponent);

    try {
      const result = await modalRef.result;
      if (result) {
        this.store.dispatch(CartActions.clearCart());
      }
    } catch (dismissed) {
      // Modal foi fechado sem confirmação
    }
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}

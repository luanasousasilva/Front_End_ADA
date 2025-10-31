import { createAction, props } from "@ngrx/store";

export const addProductToCart = createAction(
  '[Product Detail] Add Product to Cart',
  props<{ product: any }>()
);

export const removeProductFromCart = createAction(
  '[Shopping Cart] Remove Product',
  props<{ productId: number}>()
);

export const clearCart = createAction('[Shopping Cart] Clear Cart');

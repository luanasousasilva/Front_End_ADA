import { createAction, props } from "@ngrx/store";

export const addProductToCart = createAction(
  '[Product Detail] Add Product to Cart',
  props<{ product: any }>()
);

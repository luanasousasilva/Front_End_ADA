import { createReducer, on } from "@ngrx/store";
import { addProductToCart, removeProductFromCart, clearCart } from "./cart.actions";
import { initialState } from "./cart.state";

export const cartReducer = createReducer (
  initialState,
  on(addProductToCart, (state, { product }) => {
    const newItems = [...state.items, product];
    return {
      ...state,
      items: newItems,
      total: newItems.reduce((sum, item) => sum + item.price, 0),
    }
  }),
  on(removeProductFromCart, (state, { productId }) => {
    const newItems = state.items.filter(item => item.id !== productId);
    return {
      ...state,
      items: newItems,
      total: newItems.reduce((sum, item) => sum + item.price, 0),
    };
  }),
  on(clearCart, state => initialState)
);

export interface CartState {
  items: any[];
  total: number;
}

export const initialState: CartState = {
  items: [],
  total: 0
}

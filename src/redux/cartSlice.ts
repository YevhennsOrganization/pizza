import { createSlice } from '@reduxjs/toolkit';

type TypeCart = {
  id: string;
  photo: string;
  quantity: number;
  title: string;
  totalPrice: number;
}[];

const initialState = {
  filledcart: [] as TypeCart,
  error: false as any,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.filledcart = [...state.filledcart, action.payload];
    },
    clearAll(state) {
      state.filledcart = [];
    },
    deleteItem(state, action) {
      state.filledcart = state.filledcart.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const getFilledCart = (state: { cart: { filledcart: TypeCart } }) =>
  state.cart.filledcart;

export const { addItem } = cartSlice.actions;
export const { clearAll } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;

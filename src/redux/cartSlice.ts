import { createSlice } from '@reduxjs/toolkit';

type TypeCart = {
  id: string;
  photo: string;
  quantity: number;
  title: string;
  totalPrice: number;
}[];

type TypeInfo = {
  address?: string;
  comment?: string;
  delivery: boolean;
  name: string;
  number: number;
  sum: number;
};

const initialState = {
  filledcart: [] as TypeCart,
  customerInfo: {} as TypeInfo,
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
    deleteItem(state, action) {
      state.filledcart = state.filledcart.filter(
        item => item.id !== action.payload
      );
    },
    addInfo(state, action) {
      state.customerInfo = action.payload;
    },
    deleteAllItems(state) {
      state.filledcart = [];
      state.customerInfo = {} as TypeInfo;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const getFilledCart = (state: { cart: { filledcart: TypeCart } }) =>
  state.cart.filledcart;
export const getCustomerInfo = (state: { cart: { customerInfo: TypeInfo } }) =>
  state.cart.customerInfo;

export const { addItem } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;

export const { addInfo } = cartSlice.actions;
export const { deleteAllItems } = cartSlice.actions;

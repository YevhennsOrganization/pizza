import { createSlice } from '@reduxjs/toolkit';

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
    addItem(state, action: {payload: TypeCartItem}) {
      state.filledcart = [...state.filledcart, action.payload];
    },
    deleteItem(state, action: {payload: string}) {
      state.filledcart = state.filledcart.filter(
        item => item.id !== action.payload
      );
    },
    addInfo(state, action: {payload: TypeInfo}) {
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

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filledcart: [] as [],
  customerInfo: {},
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
    addInfo(state, action) {
      state.customerInfo = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const getFilledCart = (state: any) => state.cart.filledcart;

export const { addItem } = cartSlice.actions;
export const { clearAll } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;
export const { addInfo } = cartSlice.actions;

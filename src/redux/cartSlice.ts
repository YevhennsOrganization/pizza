import { createSlice } from '@reduxjs/toolkit';
import { sendOrder } from './cartOperations';

const initialState = {
  filledCart: [] as TCart,
  customerInfo: {} as TInfo,
  error: false as any,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: { payload: TCartItem }) {
      state.filledCart = [...state.filledCart, action.payload];
    },
    deleteItem(state, action: { payload: string }) {
      state.filledCart = state.filledCart.filter(
        item => item.id !== action.payload
      );
    },
    addInfo(state, action: { payload: TInfo }) {
      state.customerInfo = action.payload;
    },
    deleteAllItems(state) {
      state.filledCart = [];
      state.customerInfo = {} as TInfo;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(sendOrder.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log('error');
          state.isLoading = false;
          console.log('ok');
          return;
        }
        state.isLoading = false;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        console.log('err');
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const cartReducer = cartSlice.reducer;

export const getFilledCart = (state: { cart: { filledCart: TCart } }) =>
  state.cart.filledCart;
export const getCustomerInfo = (state: { cart: { customerInfo: TInfo } }) =>
  state.cart.customerInfo;

export const { addItem } = cartSlice.actions;
export const { deleteItem } = cartSlice.actions;

export const { addInfo } = cartSlice.actions;
export const {deleteAllItems} = cartSlice.actions;

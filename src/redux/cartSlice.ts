import { createSlice } from '@reduxjs/toolkit';
import { sendOrder } from './cartOperations';

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
    addItem(state, action: { payload: TypeCartItem }) {
      state.filledcart = [...state.filledcart, action.payload];
    },
    deleteItem(state, action: { payload: string }) {
      state.filledcart = state.filledcart.filter(
        item => item.id !== action.payload
      );
    },
    addInfo(state, action: { payload: TypeInfo }) {
      state.customerInfo = action.payload;
    },
    deleteAllItems(state) {
      state.filledcart = [];
      state.customerInfo = {} as TypeInfo;
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
          // toast.error(`Невірний номер посилки!`);
          state.isLoading = false;
          console.log('ok');
          return;
        }
        state.isLoading = false;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        console.log('err');
        // toast.error(`Помилка мережі!`);
        state.isLoading = false;
        state.error = action.payload;
      }),
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

import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsOperations';
import { RootState } from '../store';

const initialState = {
  productsAll: [] as TChosenProductsArr,
  promotions: [] as TChosenProductsArr,
  favorites: [] as TChosenProductsArr,
  error: false as boolean | string | unknown,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavoriteAction(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavoriteAction(state, action) {
      state.favorites = state.favorites.filter(
        item => item._id !== action.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (!action.payload) {
          state.error = true;
          state.isLoading = false;
          return;
        }
        if (action.payload) {
          const getByPromotion = () => {
            return action.payload.filter(
              (item: TChosenProduct) => item.promotion === true
            );
          };
          state.productsAll = action.payload;
          state.promotions = getByPromotion();
          state.isLoading = false;
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log('err');
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addToFavoriteAction } = productsSlice.actions;
export const { removeFromFavoriteAction } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export const getProductsAll = (state: RootState) => state.products.productsAll;
export const getPromotions = (state: RootState) => state.products.promotions;
export const getFavorites = (state: RootState) => state.products.favorites;
export const getIsLoading = (state: RootState) => state.products.isLoading;
export const getError = (state: RootState) => state.products.error;

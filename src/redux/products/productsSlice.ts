import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsOperations';
import { RootState } from '../store';

const initialState = {
  pizzas: [] as TChosenProduct[],
  appetizers: [] as TChosenProduct[],
  drinks: [] as TChosenProduct[],
  promotions: [] as TChosenProduct[],
  error: false as any,
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
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
          const getByCategory = (category: string) => {
            return action.payload.filter(
              (item: TChosenProduct) => item.category === category
            );
          };
          const getByPromotion = () => {
            return action.payload.filter(
              (item: TChosenProduct) => item.promotion === true
            );
          };
          state.pizzas = getByCategory('pizzas');
          state.appetizers = getByCategory('appetizers');
          state.drinks = getByCategory('drinks');
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

export const productsReducer = productsSlice.reducer;

export const getPizzas = (state: RootState) => state.products.pizzas;
export const getAppetizers = (state: RootState) => state.products.appetizers;
export const getDrinks = (state: RootState) => state.products.drinks;
export const getPromotions = (state: RootState) => state.products.promotions;
export const getIsLoading = (state: RootState) => state.products.isLoading;

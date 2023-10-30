import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsOperations';

const initialState = {
  pizzas: [] as TChosenGood[],
  appetizers: [] as TChosenGood[],
  drinks: [] as TChosenGood[],
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
              (item: TChosenGood) => item.category === category
            );
          };
          state.pizzas = getByCategory('pizzas');
          state.appetizers = getByCategory('appetizers');
          state.drinks = getByCategory('drinks');
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

export const getPizzas = (state: { products: { pizzas: TChosenGood[] } }) =>
  state.products.pizzas;
export const getAppetizers = (state: {
  products: { appetizers: TChosenGood[] };
}) => state.products.appetizers;
export const getDrinks = (state: { products: { drinks: TChosenGood[] } }) =>
  state.products.drinks;
export const getIsLoading = (state: { products: { isLoading: boolean } }) =>
  state.products.isLoading;

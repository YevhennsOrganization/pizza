import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsOperations';

const initialState = {
    products: [] as TChosenGood[],
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
                console.log('ll');

                if (!action.payload) {
                    state.error = true;
                    state.isLoading = false;
                    return;
                }
                if (action.payload) {
                    state.products = action.payload;
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

export const getProductsAll = (state: { products: { products: TChosenGood[]; }; }) =>
    state.products.products;
export const getIsLoading = (state: { products: { isLoading: boolean } }) =>
    state.products.isLoading;



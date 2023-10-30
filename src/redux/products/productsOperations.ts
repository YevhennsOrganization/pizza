import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<
    any,
    any,
    {
        rejectValue: any;
    }
>('products/getProductsAll', async ({ rejectWithValue }) => {
    try {
        // const res = await axios.get('https://xata-magnata-server.onrender.com/api/products');
        const res = await axios.get('http://localhost:3333/api/products');
        console.log(res);
        return res;

    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

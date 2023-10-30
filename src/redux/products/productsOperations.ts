import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<
    any,
    any,
    {
        rejectValue: any;
    }
>('products/getProductsAll', async (_, { rejectWithValue }) => {
    try {
        // const res = await axios.get('https://xata-magnata-server.onrender.com/api/products');
        const res = await axios.get('http://localhost:3333/api/products');
        // console.log(res.data.data.result);
        return res.data.data.result;

    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

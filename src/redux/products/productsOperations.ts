import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProductsAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        'https://api-pizza.blaize.technology/products'
      );
      return res.data.data.result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

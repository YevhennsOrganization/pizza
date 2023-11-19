import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<
  TProductsArr,
  void,
  {
    rejectValue: string;
  }
>('products/getProductsAll', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('https://api-pizza.blaize.technology/products');
    return res.data.data.result as TProductsArr;
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});

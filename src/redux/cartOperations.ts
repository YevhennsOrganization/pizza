import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

type TypeCart = {
  address?: string;
  comment?: string;
  delivery: boolean;
  name: string;
  number: string;
  sum: number;
};

export const sendOrder = createAsyncThunk<
  any,
  any,
  { rejectValue: string }
>('cart/sendOrder', async (order, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://xata-magnata-server.onrender.com/',
      {
        body: order,
      }
    );
    console.log(response);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

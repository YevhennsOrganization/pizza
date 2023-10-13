import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

type Info = {
  address?: string | undefined;
  comment?: string | undefined;
  delivery: boolean;
  name: string;
  number: string;
  sum: number;
};

export const sendOrder = createAsyncThunk<
  any,
  Info,
  { rejectValue: string }
>('cart/sendOrder', async (order, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://xata-magnata-server.onrender.com/',
      {
        body: JSON.stringify(order),
      }
    );
    // console.log(response.data.data.body);
    console.log(order);
    
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

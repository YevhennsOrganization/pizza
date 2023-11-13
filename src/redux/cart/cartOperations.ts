import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendOrder = createAsyncThunk<
  any,
  any,
  {
    rejectValue: any;
  }
>('cart/sendOrder', async (order, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      'https://api-pizza.blaize.technology/send_order',
      {
        body: JSON.stringify(order),
      }
    );
    return res.status;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

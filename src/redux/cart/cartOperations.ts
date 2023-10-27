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
    const res = await axios.post('http://130.162.51.139/', {
      body: JSON.stringify(order),
    });
    return res.status;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

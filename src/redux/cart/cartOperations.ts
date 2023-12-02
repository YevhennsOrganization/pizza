import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendOrder = createAsyncThunk<
  number,
  TSummaryOrder,
  {
    rejectValue: string;
  }
>('cart/sendOrder', async (order, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      'https://api-pizza.blaize.technology/api/send_email',
      {
        body: JSON.stringify(order),
      }
    );
    return res.status;
  } catch (error: any) {
    return rejectWithValue(error.message as string);
  }
});

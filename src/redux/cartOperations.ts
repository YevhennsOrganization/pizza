import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendOrder = createAsyncThunk<
  any,
  any,
  {
    rejectValue: string
  }
>('cart/sendOrder', async (order, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://xata-magnata-server.onrender.com/',
      {
        body: JSON.stringify(order),
      },
    );
    // console.log(response.data.data.body);
    console.log(order);

  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

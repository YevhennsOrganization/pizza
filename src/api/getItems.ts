import axios from 'axios';

export const getItems = async (route: string) => {
  try {
    const response = await axios.get(
      `https://xata-magnata-server.onrender.com/api/${route}`
    );
    return response.data.data.result;
  } catch (error: any) {
    return error.message;
  }
};

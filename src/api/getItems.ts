import axios from 'axios';

export const getItems = async (route: string) => {
  try {
    const response = await axios.get(
      `http://130.162.51.139/api/${route}`
    );
    return response.data.data.result;
  } catch (error: any) {
    return error.message;
  }
};

import axios from 'axios';

const WEATHER_BASE_URL = process.env.WEATHER_BASE_URL;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const showDniproWeather = async () => {
  try {
    const res: ApiResponse = await axios.get(
      `${WEATHER_BASE_URL}/forecast.json?q=Dnipropetrovsk&days=3&lang=uk&key=${WEATHER_API_KEY}`
    );
    return res.data.forecast.forecastday;
  } catch (error: any) {
    return error.message;
  }
};

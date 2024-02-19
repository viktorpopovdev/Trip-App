import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getForecastForPeriodOfTime(location, date) {
  try {
    const response = await apiService.get(`${location}/${date}?key=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getForecastForToday(location) {
  try {
    const response = await apiService.get(`${location}/today?key=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

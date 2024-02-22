import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getForecastForPeriodOfTime(location, startDate, endDate) {
  try {
    const response = await apiService.get(`${location}/${startDate}/${endDate}?key=${apiKey}&unitGroup=metric`);
    return response.data;
  } catch (error) {
    console.log(22);
    throw new Error(error);
  }
}

export async function getForecastForToday(location) {
  try {
    const response = await apiService.get(`${location}/today?key=${apiKey}&unitGroup=metric&iconSet=icons2`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

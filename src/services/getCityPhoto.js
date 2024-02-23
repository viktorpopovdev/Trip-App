import axios from 'axios';

const apiKey = import.meta.env.VITE_CITY_PHOTO_API_KEY;

const baseURL = 'https://api.unsplash.com/search/photos?page=1&query=';

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getCityPhoto(selectedCity) {
  try {
    const response = await apiService.get(`${selectedCity}&client_id=${apiKey}`);
    return response.data.results[2].links.download;
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
}

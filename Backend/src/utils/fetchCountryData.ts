import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/alpha/';

export const fetchCountryData = async (alpha2Code: string) => {
  try {
    const response = await axios.get(`${API_URL}${alpha2Code}`);
    return response.data[0]; 
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw new Error('Unable to fetch country data');
  }
};

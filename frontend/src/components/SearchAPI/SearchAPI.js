
// ============ GET REQUEST to SERVER(backend) ===================


import axios from 'axios';



const BASE_URL = 'https://bounse-insights-countries-test.onrender.com/'; 


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const SearchAllCountries = async () => {
  const serverDataURL = `api/countries/`;
  try {
    const server = await axiosInstance.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};


export const SearchCountryAPI = async name => {
    if(!name) {
    return SearchAllCountries();
  }
  const serverDataURL = `api/countries/?country=${name}`;
  try {
    const server = await axiosInstance.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};





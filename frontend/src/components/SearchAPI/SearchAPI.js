
// ============ GET REQUEST to SERVER ===================


import axios from 'axios';

// const BASE_URL = 'http://localhost:3001/';

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
  if (name === '' || name === null) {
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




// ============ GET REQUEST directly to API ===================


// import axios from 'axios';

// const BASE_URL = 'https://restcountries.com/v3.1/';

// // BASE_URL = 'https://


// export const SearchAllCountries = async () => {
//   const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;
//   try {
//     const server = await axios.get(serverDataURL);
//     const data = await server.data;

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };


// export const SearchCountryAPI = async name => {
//   if (name === '' || name === null) {
//     return SearchAllCountries();
//   }
//   const serverDataURL = `${BASE_URL}name/${name}?fields=name,capital,population,languages,flags,region,currencies`;
//   try {
//     const server = await axios.get(serverDataURL);
//     const data = await server.data;

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };


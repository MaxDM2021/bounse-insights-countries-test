
// ============ GET REQUEST to SERVER ===================


import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';


export const SearchAllCountries = async () => {
  const serverDataURL = `${BASE_URL}api/countries/`;
  try {
    const server = await axios.get(serverDataURL);
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
  const serverDataURL = `${BASE_URL}api/countries/?country=${name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};


// ============ GET REQUEST to API ===================


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


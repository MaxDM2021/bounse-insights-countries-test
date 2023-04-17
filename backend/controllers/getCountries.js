const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchAllCountries = async (req, res, next) => {
  try {
    let serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;

    // Check if country parameter is present in the query
    if (req.query.country) {
      serverDataURL = `${BASE_URL}name/${req.query.country}`;
    }

    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchAllCountries;

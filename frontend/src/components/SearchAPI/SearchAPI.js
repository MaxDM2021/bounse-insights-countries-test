import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';



export const SearchAllCountries = async () => {

    const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;
    try {
        const server = await axios.get(serverDataURL);
        console.log("server: ", server);
        const data = await server.data;
        console.log("data: ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const SearchCountryAPI = async (name) => {

 if (name === '' || name === null) { 
 
   return SearchAllCountries();
    }
    const serverDataURL = `${BASE_URL}name/${name}?fields=name,capital,population,languages,flags`;
    try {
        const server = await axios.get(serverDataURL);

        const data = await server.data;
  
        return data;
       
    } catch (error) {
        console.log(error);
    }
};


// export const SearchCountryByPopul = async (name, id) => {

//        const serverDataURL = `${BASE_URL}name/${name}?${id}`;
//        try {
//            const server = await axios.get(serverDataURL);
   
//            const data = await server.data;
     
//            return data;
          
//        } catch (error) {
//            console.log(error);
//        }
//    };








// export const SearchMoviesDetails = async (id) => {
    

//     const serverDataURL = `${BASE_URL}/character/${id}`;
//     console.log("serverDataURL: ", serverDataURL)
//     try {
//         const server = await axios.get(serverDataURL);
//         const data = await server.data;
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };


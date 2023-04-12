import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { SearchCountryAPI } from '../../components/SearchAPI/SearchAPI';
import { Form } from '../../components/Form/Form';
import { CountryItem } from '../CountryItem/CountryItem';
import { Loader } from '../../components/Loader/Loader';

import CountryListSCSS from '../CountryItem/CountryList.module.scss';
import CountrySearchSCSS from './CountrySearch.module.scss';



const CountrySearch = () => {

  const [searchCountryValue, setSearchCountryValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);

 const countriesName = searchParams.get('name') ?? '';


  useEffect(() => {
    serverAPI(searchCountryValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCountryValue]);

  const onSubmit = event => {
    event.preventDefault();
    setSearchCountryValue(event.target.name.value);
  };

  const onChang = name => {
    const nextParams = name.common !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const serverAPI = async name => {
    setError(false);
    setLoader(true);
    const data = await SearchCountryAPI(name);
    console.log("data: ", data);
    const results = await data.sort((x, y) =>
      x.name.common.localeCompare(y.name.common)
    );
    console.log("results: ", results);
    setCountries(results);
    console.log("countries ", countries);
    if (!results.length) {
      setError(true);
    }
    setLoader(false);
   
  };

  return (
    <main>
      <section>
        <Form
          submit={onSubmit}
          searchCountryValue={countriesName}
          onChang={onChang}
        />
        {loader && <Loader />}
        {error && (
          <p className={CountrySearchSCSS.p}>
            Sorry, we didn't find anything. Try again.
          </p>
        )}

        {  
         countries.length > 0 && (
          <ul className={CountryListSCSS.list}>
            {countries.map(country => (
              <CountryItem  key={nanoid()} country={country} ></CountryItem >
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
export default CountrySearch;

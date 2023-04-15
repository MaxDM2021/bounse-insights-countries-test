import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { SearchCountryAPI } from '../../components/SearchAPI/SearchAPI';
import CountriesDetailsSCSS from './CountriesDetails.module.scss';

const CountriesDetails = () => {
  const location = useLocation();
  const countryName = location.pathname.replace('/countries/', '');
  const [country, setCountry] = useState({});
  const [goBack, setGoBack] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    serverAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const serverAPI = async () => {
    try {
      const data = await SearchCountryAPI(countryName);
      setCountry(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const goBackPage = () => {
    navigate(-goBack);
    setGoBack(1);
    return;
  };

  const {
    name = {},
    capital,
    population,
    languages = {},
    flags = {},
    region = '',
    currencies = {},
  } = country;

  const currencyValues = Object.values(currencies);
  const currency = currencyValues[0]?.name;



  return (
    <main>
      <section className={CountriesDetailsSCSS.details}>
        <button
          type="button"
          onClick={goBackPage}
          className={CountriesDetailsSCSS.button}
        >
          <FiArrowLeft size={30} />
          GO BACK
        </button>
        <div className={CountriesDetailsSCSS.card}>
          <img
            src={flags.svg}
            alt={name.official}
            className={CountriesDetailsSCSS.img}
          />
          <div className={CountriesDetailsSCSS.info}>
            <h2 className={CountriesDetailsSCSS.title}>{name.common}</h2>
            <h2 className={CountriesDetailsSCSS.titleInfo}>Informations</h2>
            <ul className={CountriesDetailsSCSS.list}>
              <li className={CountriesDetailsSCSS.item}>
                <h3 className={CountriesDetailsSCSS.titleItem}>Capital:</h3>
                <p className={CountriesDetailsSCSS.textItem}>{capital}</p>
              </li>
              <li className={CountriesDetailsSCSS.item}>
                <h3 className={CountriesDetailsSCSS.titleItem}>Population:</h3>
                <p className={CountriesDetailsSCSS.textItem}>{population}</p>
              </li>
              <li className={CountriesDetailsSCSS.item}>
                <h3 className={CountriesDetailsSCSS.titleItem}>Currency:</h3>
                <p className={CountriesDetailsSCSS.textItem}>{currency}</p>
              </li>
              <li className={CountriesDetailsSCSS.item}>
                <h3 className={CountriesDetailsSCSS.titleItem}>Languages:</h3>
                <p className={CountriesDetailsSCSS.textItem}>
                  {Object.values(languages)}
                </p>
              </li>
              <li className={CountriesDetailsSCSS.item}>
                <h3 className={CountriesDetailsSCSS.titleItem}>Region:</h3>
                <p className={CountriesDetailsSCSS.textItem}>{region}</p>
              </li>
            </ul>
          </div>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};
export default CountriesDetails;

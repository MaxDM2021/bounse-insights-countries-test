import { Link, useLocation } from 'react-router-dom';
import CountryListSCSS from './CountryList.module.scss';
import defoltImg from '../../img/imgDefault.jpg';

export const CountryItem = ({ country }) => {
  const location = useLocation();

  const url = `countries/${country.name}`;

  return (
    <li className={CountryListSCSS.item}>
      <Link
        to={`${url}`}
        className={CountryListSCSS.link}
        state={{ from: location }}
      >
        <img
          src={country.flags ? country.flags : defoltImg}
          alt={country.flags}
          className={CountryListSCSS.img}
        />
        <div className={CountryListSCSS.info}>
          <p className={CountryListSCSS.infoItem}>
            <h3>{country.name}</h3>
          </p>
        </div>
      </Link>
    </li>
  );
};

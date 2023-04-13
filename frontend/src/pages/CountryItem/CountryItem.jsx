import { Link, useLocation } from 'react-router-dom';
import CountryListSCSS from './CountryList.module.scss';
import defoltImg from '../../img/imgDefault.jpg';

export const CountryItem = ({country}) => {
  const location = useLocation();

  const { name, flags, population } = country;

  const url = `countries/${population}`;

  return (
    <li className={CountryListSCSS.item}>
      <Link
        to={`${url}`}
        className={CountryListSCSS.link}
        state={{ from: location }}
        countryitem={country}
      >
        <img
          src={flags.svg ? flags.svg : defoltImg}
          alt={flags.svg}
          className={CountryListSCSS.img}
        />
        <div className={CountryListSCSS.info}>
            <h3 className={CountryListSCSS.infoItem}>{name.common}</h3>
        </div>
      </Link>
    </li>
  );
};

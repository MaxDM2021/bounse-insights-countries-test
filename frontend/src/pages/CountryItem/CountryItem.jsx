import { Link } from 'react-router-dom';
import CountryListSCSS from './CountryList.module.scss';
import defoltImg from '../../img/imgDefault.jpg';

export const CountryItem = ({ country }) => {

  const { name, flags } = country;
  const url = `countries/${name.official}`;

  return (
    <li className={CountryListSCSS.item}>
      <Link
        to={{
          pathname: `${url}`,
          state: { countryitem: country },
        }}
        className={CountryListSCSS.link}
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

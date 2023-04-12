
import { ImSearch } from 'react-icons/im';

import PropTypes from 'prop-types';
import FormSCSS from './Form.module.scss'


export const Form = ({ submit, searchCountryValue, onChang }) => {
    const onChange = event => {
        onChang(event.target.value.toLowerCase());
    };
    
    return (
        <form id="search-form" autoComplete="off" onSubmit={submit} className={FormSCSS.SearchForm}>
                 <button type="submit" className={FormSCSS.SearchFormButton}>
        <ImSearch />
        <span className={FormSCSS.SearchFormButtonLabel}>Search</span>
      </button>
           
           
            <input
                className={FormSCSS.SearchFormInput}
                type="text"
                name="name"
                autoFocus
                placeholder="Filter by name..."
                onChange={onChange}
                value={searchCountryValue}
            />
           
        </form>
    )
}
Form.propTypes = {
    submit: PropTypes.func.isRequired,
    searchCountryValue: PropTypes.string.isRequired,
    onChang: PropTypes.func.isRequired,
};
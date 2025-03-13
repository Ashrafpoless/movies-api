import { useState, useContext } from 'react';
import SearchContext from '../context/SearchContext';

import './Search.css'
const Search = () => {
    const [value, setValue] = useState('');

    const { setSearchText } = useContext(SearchContext);
    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            return;
        }
        setSearchText(value);
        setValue('');
    };
    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
};

export default Search;

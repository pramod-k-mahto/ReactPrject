import React, { useContext } from 'react';
import './Search.css';
import { AppContext } from '../context/Context';

const Search = () => {
  const { query, setQuery } = useContext(AppContext);

  return (
    <div>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='input'
          // value={query}
          placeholder='Enter movie name'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;

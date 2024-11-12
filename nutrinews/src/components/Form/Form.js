import './Form.css';
import { useState } from 'react';

const Form = ({ filterArticles, toggleFilter, isFilter }) => {
  const [search, setSearch] = useState('');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterArticles(search);
  };

  const clearResults = () => {
    setSearch('');
    toggleFilter();
  };

  return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
            value={search}
            type='text'
            placeholder='Buscar artigos...'
            name='search'
            className='search-bar'
            onChange={(e) => updateSearch(e)}
        />

        {!isFilter && (
            <button
                type='submit'
                className='search-btn'
                disabled={search.length ? false : true}
            >
              Buscar
            </button>
        )}

        {isFilter && (
            <button
                type='button'
                className='clear-btn'
                onClick={() => clearResults()}
            >
              Limpar
            </button>
        )}
      </form>
  );
};

export default Form;

import './Form.css';
import { useState } from 'react';

const hashtags = [
     "#probióticos",
    "#fibras", "#proteína", "#antioxidantes", "#nutrigenômica",
    "#saudemental",
     "#fitonutrientes",
    "#dietacetogenica","#hidratacao",
    "#perdadepeso", "#hipertrofia"
];


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

    const handleHashtagClick = (hashtag) => {
        filterArticles(hashtag);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={search}
                    type='text'
                    placeholder='Buscar artigos...'
                    className='search-bar'
                    onChange={updateSearch}
                />
                {!isFilter && (
                    <button type='submit' className='search-btn' disabled={search.length === 0}>
                        Buscar
                    </button>
                )}
                {isFilter && (
                    <button type='button' className='clear-btn' onClick={clearResults}>
                        Limpar
                    </button>
                )}
            </form>

            <div className="hashtags-container">
                {hashtags.map((hashtag, index) => (
                    <span
                        key={index}
                        className="hashtag"
                        onClick={() => handleHashtagClick(hashtag)}
                    >
                        {hashtag}
                    </span>
                ))}
            </div>
        </>
    );
};

export default Form;

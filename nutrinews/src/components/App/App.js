import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import Footer from '../Footer/Footer';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import Form from '../Form/Form';
import mockArticles from '../../mockData';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [isFilter, setFilter] = useState(false);
    const [error, setError] = useState('');
    const [today, setToday] = useState('');

    const filterArticles = (filterBy) => {
        const filtered = articles.filter(article =>
            // Verifica se o título ou seção contém o termo pesquisado
            article.section.toLowerCase().includes(filterBy.toLowerCase()) ||
            article.title.toLowerCase().includes(filterBy.toLowerCase()) ||
            // Verifica se alguma hashtag corresponde ao termo pesquisado
            article.hashtags.some(hashtag => hashtag.toLowerCase() === filterBy.toLowerCase())
        );
        setFilteredResults(filtered);
        setFilter(true);
    };

    const toggleFilter = () => {
        setFilter(false);
        setFilteredResults(articles); // Restaura todos os artigos quando o filtro é desativado
    };

    useEffect(() => {
        setArticles(mockArticles);
        setFilteredResults(mockArticles);
        setToday(new Date().toDateString());
    }, []);

    return (
        error ? <p className='error'>{error}</p> : (
            <div className='app-container'>
                <Header today={today} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Form filterArticles={filterArticles} toggleFilter={toggleFilter} isFilter={isFilter} />
                                <ArticleList articles={articles} filteredResults={filteredResults} isFilter={isFilter} />
                            </>
                        }
                    />
                    <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
                </Routes>
                <Footer />
            </div>
        )
    );
};

export default App;

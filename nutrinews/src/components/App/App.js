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
            article.section.toLowerCase().includes(filterBy.toLowerCase()) ||
            article.title.toLowerCase().includes(filterBy.toLowerCase())
        );
        setFilteredResults(filtered);
        setFilter(true);
    };

    const toggleFilter = () => {
        setFilter(!isFilter);
    };

    useEffect(() => {
        setArticles(mockArticles);
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

import './ArticleList.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = ({ articles, filteredResults, isFilter }) => { 
  let arr
  !isFilter ? arr = articles : arr = filteredResults
  
  const articleCards = arr.map((article, index) => {
    return (
      <ArticleCard 
        key={index}
        id={article.short_url.split('/')[3]}
        title={article.title}
        abstract={article.abstract}
        multimedia={article.multimedia}
        short_url={article.short_url}
      />
    )
  })
  return (
    !articleCards.length ? <p className='no-results-msg'>No results were found based on your search. Clear and try a new search.</p> : (
      <div className='article-list'>
        {articleCards}
      </div>
    )
  )
}

export default ArticleList;
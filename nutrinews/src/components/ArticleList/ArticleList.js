import './ArticleList.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = ({ articles, filteredResults, isFilter }) => {
  // Se `isFilter` for verdadeiro, exiba os resultados filtrados; caso contrário, exiba todos os artigos
  const arr = isFilter ? filteredResults : articles;

  const articleCards = arr.map((article, index) => (
      <ArticleCard
          key={index}
          id={article.short_url.split('/')[3]}
          title={article.title}
          abstract={article.abstract}
          multimedia={article.multimedia}
          short_url={article.short_url}
      />
  ));

  return (
      !articleCards.length ?
          <p className='no-results-msg'>Nenhum resultado encontrado. Tente uma nova busca.</p> : (
              <div className='article-list'>
                {articleCards}
              </div>
          )
  );
};

export default ArticleList;

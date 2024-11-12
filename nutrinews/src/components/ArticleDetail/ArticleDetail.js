import './ArticleDetail.css';
import { Link, useParams } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
    const { id } = useParams();
    const selectedArticle = articles.find(article => article.short_url.split('/')[3] === id);

    if (!selectedArticle) {
        return <p>Artigo não encontrado</p>;
    }

    const { title, abstract, byline, multimedia, section, subsection, short_url, updated_date } = selectedArticle;

    return (
        <div className='details-viewpage'>
            <div className='back-btn-container'>
                <Link to='/'>
                    <button className='back-btn'>Voltar</button>
                </Link>
            </div>
            <div className='article-details'>
                <div className='details-container'>
                    <h1>{title}</h1>
                    <p>{abstract}</p>
                    <a className='article-link' href={short_url} target='_blank' rel='noopener noreferrer'>Leia Mais...</a>
                    <p>{byline}</p>
                    <p>{updated_date}</p>
                    <p>{section} {subsection}</p>
                </div>
                {multimedia?.[1] && (
                    <div className='img-container'>
                        <img src={multimedia[1].url} alt={multimedia[1].caption} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticleDetail;

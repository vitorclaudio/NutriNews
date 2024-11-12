import './ArticleCard.css';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, abstract, id, multimedia }) => {
    return (
        <Link to={`article/${id}`}>
            <article className='article-card'>
                <img src={multimedia[0].url} alt={multimedia[0].caption} />
                <h2>{title}</h2>
                <p>{abstract}</p>
            </article>
        </Link>
    );
};

export default ArticleCard;

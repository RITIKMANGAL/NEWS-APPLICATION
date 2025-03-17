import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => (
  <div className="news-card">
    {article.urlToImage && (
      <div className="image-container">
        <img src={article.urlToImage} alt={article.title} />
        <div className="image-overlay"></div>
      </div>
    )}
    <div className="news-content">
      <h2>{article.title}</h2>
      <p>{article.description || 'No description available.'}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  </div>
);

export default NewsCard;

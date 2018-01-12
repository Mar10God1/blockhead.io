import React from "react";
import PropTypes from "prop-types";


function Articles (props) {
    let articleDivs = props.articles.map((article, i) => {
            let date = article.publishedAt.slice(0,10);
            if (article.urlToImage) {
                if (article.source.name !== "Nzherald.co.nz") {
            return (
                <div className="news-item" key={i}>
                    <div className="article-img">
                        <img src={article.urlToImage} /> 
                    </div>
                    <a href={article.url} target="blank" >{article.title}</a>
                    <div className="article-info">
                        <div className="article-source">{article.source.name}</div>
                        <div className="article-date">{date}</div>
                    </div>
                </div>);
            }
        }
        });
        return (
            <div className="news-list">
                {articleDivs}
            </div>);
    
}

Articles.propTypes = {
    articles: PropTypes.array
};

export default Articles;
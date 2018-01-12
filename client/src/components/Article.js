import React, { Component } from "react";

class Article extends Component {

    componentDidMount() {

         

        this.props.loadNews(searchTerm);
        
    }
    render() {

        return (
            <div className="Article">
                <img src={this.props.article.urlToImage} />
                <div>{this.props.article.title}</div>
                <div>{this.props.article.description}</div>
                <div>{this.props.article.source.name}</div>
                
            </div>
        );
    }
}

export default Article;
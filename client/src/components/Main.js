import React, { Component } from "react";
import ArticlesContainer from "../containers/ArticlesContainer";
import MarketsContainer from "../containers/MarketsContainer";

class Main extends Component {

    componentDidMount() {
        this.props.loadCoins();
        this.props.loadMarkets();
        this.props.loadNews();
        setInterval(() => this.props.loadMarkets(), 10000);
        setInterval(() => this.forceUpdate(), 11001);
   
    }
    render() {

        return (
            <div className="Main">
                <div className="main-container">
                <MarketsContainer />
                <ArticlesContainer />
                </div>
            </div>
        );
    }
}

export default Main;
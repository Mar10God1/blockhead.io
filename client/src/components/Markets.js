import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Markets (props) {
    

    let markets = []
    let nameObject = props.markets;
    for(let key in nameObject) {

        markets.push(key, nameObject[key].USD);
        

    }

    console.log(markets);
    let marketDivs = markets.map((market, i) => {
        

        if (i % 2 !== 0) {

            let changeClass = "";
            if (market.CHANGEPCT24HOUR > 0) {
                changeClass = "changeUp"
            } else {
                changeClass = "changeDown";
            }
            let name = market.FROMSYMBOL;
            let price = market.PRICE.toLocaleString();
            let change1 = market.CHANGEPCT24HOUR.toString();
            let change = change1.slice(0,6);
            
            function handleCoinClick(props) {
                let coinName = name;
                this.setState({searchTerm: {coinName}});
                console.log(this.props.searchTerm);
              }

        return (
            <div className="coin-item" key={i} onClick={handleCoinClick}>
                <div className="coin-name">
                    {name}
                </div>
                <div className="coin-price">
                    ${price}
                </div>
                <div className={changeClass}>
                    {change}%
                </div>

                
            </div>);
        }
        });
    
        return (
            <div className="coin-list">
                <div className="coin-item-header">
                <div className="coin-name">Name</div>
                <div className="coin-price">Price (USD)</div>
                <div className="coin-change">24hr Change</div>
                </div>
                {marketDivs}
            </div>
    );
}

Markets.propTypes = {
    markets: PropTypes.object
};

export default Markets;
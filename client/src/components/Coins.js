import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Coins (props) {
    let coinDivs = props.coins.map((coin, i) => {
        return (
            <div key={i}>
                {coin.name} {coin.buyprice} {coin.buyquantity}
                <button onClick={() => 
                props.deleteCoin(coin._id)}>Delete</button>
                <Link to={"/coins/" + coin._id}>View</Link>
            </div>);
        });
        return (
            <div>
                {coinDivs}
            </div>
    );
}

Coins.propTypes = {
    coins: PropTypes.array
};

export default Coins;
import React, { Component } from "react";

class Coin extends Component {

    componentDidMount() {

         
        this.props.getCoin(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                <div>{this.props.coin.name}</div>
                <div>{this.props.coin.buyprice}</div>
                <div>{this.props.coin.buyquantity}</div>
                <div>{this.props.coin.buydate}</div>
                <div>{this.props.coin.sellprice}</div>
                <div>{this.props.coin.sellquantity}</div>
                <div>{this.props.coin.selldate}</div>
            </div>
        );
    }
}

export default Coin;
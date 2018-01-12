import React, { Component } from "react";
import CoinsContainer from "../containers/CoinsContainer";
import CreateCoinsContainer from "../containers/CreateCoinsContainer";

class MyPortfolio extends Component {

    componentDidMount() {
        this.props.loadCoins();
        
        
    }
    render() {

        return (
            <div className="MyPortfolio">

                <CoinsContainer />
                <CreateCoinsContainer />
                
            </div>
        );
    }
}

export default MyPortfolio;
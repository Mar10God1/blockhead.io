import React from "react";

class CreateCoins extends React.Component {
    constructor() {
        super();
        this.state = {
            coin: {
                name: "",
                buyprice: "",
                buyquantity: "",
                buydate: "",
                sellprice: "",
                sellquantity: "",
                selldate: "",

            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Coin</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.addCoin) {
                            this.props.addCoin(this.state.coin);
                        }
                    }}>
                    <div>
                        Make: <input onChange={(e) => {
                            const coin = {make: e.target.value};
                            this.setState({
                                coin: Object.assign(this.state.coin,coin)
                            });
                        }} />
                    </div>
                    <div>
                        Model: <input onChange={(e) => {
                            const coin = {model: e.target.value};
                            this.setState({
                                coin: Object.assign(this.state.coin,coin)
                            });
                        }} />
                    </div>   
                    <div>
                        Yeoin: <input onChange={(e) => {
                            const coin = {yeoin: e.target.value};
                            this.setState({
                                coin: Object.assign(this.state.coin,coin)
                            });
                        }} />
                    </div>
                    <div>
                        Color: <input onChange={(e) => {
                            const coin = {color: e.target.value};
                            this.setState({
                                coin: Object.assign(this.state.coin,coin)
                            });
                        }} />
                    </div>
                    <div>
                        Engine: <input onChange={(e) => {
                            const coin = {engine: e.target.value};
                            this.setState({
                                coin: Object.assign(this.state.coin,coin)
                            });
                        }} />
                    </div>
                    <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCoins;
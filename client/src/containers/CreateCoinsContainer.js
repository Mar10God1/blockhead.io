import { connect } from "react-redux";
import CreateCoins from "../components/CreateCoins";
import { addCoin } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        addCoin: function (coin) {
            dispatch(addCoin(coin));
        }
    };
}

export default connect(null,mapDispatchToProps)(CreateCoins);
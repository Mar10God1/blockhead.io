import { connect } from "react-redux";
import Coin from "../components/Coin";
import { getCoin } from "../actions";

function mapStateToProps(state) {

    return {
        coin: state.coin
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getCoin: function (id) {
            dispatch(getCoin(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin);

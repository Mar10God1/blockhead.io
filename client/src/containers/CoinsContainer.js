import { connect } from "react-redux";
import Coins from "../components/Coins";
import { deleteCoin } from "../actions";

function mapStateToProps(state) {

    return {
        coins: state.coins
    };
}

function mapDispatchToProps (dispatch) {
    return {
        deleteCoin: function (id) {
            dispatch(deleteCoin(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
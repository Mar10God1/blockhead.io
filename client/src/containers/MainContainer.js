import Main from "../components/Main";
import { connect } from "react-redux";
import { loadCoins,loadMarkets, loadNews } from "../actions";

function mapStateToProps(state) {
    
        return {
            searchTerm: state.searchTerm
        };
    }

function mapDispatchToProps(dispatch) {
  return {
    loadCoins: function () {
      dispatch(loadCoins());
    },
    loadMarkets: function () {
        dispatch(loadMarkets());
      },
    loadNews: function (searchTerm) {
        dispatch(loadNews());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);

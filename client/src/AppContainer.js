import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadCoins,loadNews,loadMarkets } from "./actions";

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
    },
  };
}


export default connect(null,mapDispatchToProps)(App);

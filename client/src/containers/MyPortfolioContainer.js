import MyPortfolio from "../components/MyPortfolio";
import { connect } from "react-redux";
import { loadCoins } from "../actions";

function mapStateToProps(state) {
    
        return {
            searchTerm: state.searchTerm
        };
    }

function mapDispatchToProps(dispatch) {
  return {
    loadCoins: function () {
      dispatch(loadCoins());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPortfolio);

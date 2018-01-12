import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import { loadNews } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadNews: function (searchTerm) {
      dispatch(loadNews(searchTerm));
    },
  };
}

export default connect(null,mapDispatchToProps)(SearchBox);

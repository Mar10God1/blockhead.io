import { connect } from "react-redux";
import Article from "../components/Article";
import { getArticle } from "../actions";

function mapStateToProps(state) {

    return {
        Article: state.Article,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getArticle: function (id) {
            dispatch(getArticle(id));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

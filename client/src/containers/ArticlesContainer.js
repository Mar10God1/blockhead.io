import { connect } from "react-redux";
import Articles from "../components/Articles";

function mapStateToProps(state) {

    return {
        articles: state.articles
    };
}

export default connect(mapStateToProps)(Articles);
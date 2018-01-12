import { connect } from "react-redux";
import Markets from "../components/Markets";


function mapStateToProps(state) {

    return {
        markets: state.markets,
        searchTerm: state.searchTerm
    };
}

export default connect(mapStateToProps)(Markets);
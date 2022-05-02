import CriticPage from "../components/CriticPage";
import {connect} from "react-redux";

const dispatchToPropsMapper = dispatch => ({

});
const stateToPropsMapper = state => ({
    username: state.userReducer.username,
    description: state.userReducer.description
});
const CriticPageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(CriticPage);
export default CriticPageContainer;
import FanPage from "../components/FanPage";
import {connect} from "react-redux";

const dispatchToPropsMapper = dispatch => ({
});
const stateToPropsMapper = state => ({
    username: state.userReducer.username,
    description: state.userReducer.description
});
const FanPageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(FanPage);
export default FanPageContainer;
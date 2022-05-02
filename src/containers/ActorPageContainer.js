import ActorPage from "../components/ActorPage";
import {connect} from "react-redux";

const dispatchToPropsMapper = dispatch => ({

});
const stateToPropsMapper = state => ({
    username: state.userReducer.username,
    description: state.userReducer.description
});
const ActorPageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ActorPage);
export default ActorPageContainer;
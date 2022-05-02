import {connect} from 'react-redux';
import Registration from '../components/Registration';
import * as actions from "../actions/login";


const dispatchToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    selectUserType: (type) => actions.selectUserType(dispatch, type),
    registerUser: (username, password, verifyPassword, userType) =>
        actions.registerUser(dispatch, username, password, verifyPassword, userType)
});

const stateToPropsMapper = state => ({
    userType: state.userReducer.userType
});

const RegistrationContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Registration);
export default RegistrationContainer;
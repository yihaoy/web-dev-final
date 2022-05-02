import {connect} from 'react-redux'
import Profile from '../components/Profile'
import * as actions from "../actions/login";

const dispatchToPropsMapper = dispatch => ({
    TextChanged: (type,newText) => actions.textChanged(dispatch, type, newText),
    update: (user) => actions.updateUser(user),
    getProfile: () => actions.getProfile(dispatch)
});

const stateToPropsMapper = state => ({
    username: state.userReducer.username,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    email: state.userReducer.email,
    dob: state.userReducer.dob,
    phone: state.userReducer.phone,
    city: state.userReducer.city,
    description: state.userReducer.description
});

const ProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Profile);
export default ProfileContainer;
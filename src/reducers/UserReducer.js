import * as constants from '../constants';

let userInitialState = {
    //login
    username: '',
    password: '',
    verifyPassword: '',
    dob: '',
    description: '',
    userType: undefined,
    loggedIn: false
};

const userReducer = (state = userInitialState , action) => {
    let newState;

    switch (action.type) {

        //Login
        case constants.TEXT_CHANGED:
            newState = Object.assign({}, state);
            if (action.fieldType === 'username') {
                newState.username = action.text;
            } else if (action.fieldType === 'password') {
                newState.password = action.text;
            } else if (action.fieldType === 'firstName') {
                newState.firstName = action.text;
            } else if (action.fieldType === 'lastName') {
                newState.lastName = action.text;
            } else if (action.fieldType === 'email') {
                newState.email = action.text;
            } else if (action.fieldType === 'dob') {
                newState.dob = action.text;
            } else if (action.fieldType === 'city') {
                newState.city = action.text;
            } else if (action.fieldType === 'verifyPassword') {
                newState.verifyPassword = action.text
            } else if (action.fieldType === 'phone') {
                newState.phone = action.text;
            } else if (action.fieldType === 'description') {
                newState.description = action.text
            }
            return newState;

        case constants.FETCH_PROFILE:
            newState = Object.assign({}, state);
            newState.username = action.data.username;
            newState.firstName = action.data.firstName;
            newState.lastName = action.data.lastName;
            newState.email = action.data.email;
            newState.password = '';
            newState.verifyPassword = '';
            newState.dob = action.data.dob;
            newState.phone = action.data.phone;
            newState.userType = action.data.type;
            newState.city = action.data.city;
            newState.description = action.data.description;
            return newState;

        case constants.SAVE_USER_TYPE:
            newState = Object.assign({}, state);
            newState.userType = action.userType;
            return newState;

        case constants.SAVE_USERNAME_AND_USERTYPE:
            newState = Object.assign({}, state);
            newState.username = action.username;
            newState.userType = action.userType;
            newState.loggedIn = true;
            return newState;


        case constants.LOGOUT:
            newState = Object.assign({}, state);
            newState.loggedIn = false;
            return newState;

        default:
            return state;
    }
};

export default userReducer;
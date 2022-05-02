import * as constants from '../constants/index';
import UserServiceClient from '../services/user.service.client'

export const textChanged = (dispatch, type, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        fieldType: type,
        text: newText
    })
);

export const registerUser = (dispatch, username, password, verifyPassword, userType) => {
    if (password !== verifyPassword)
        alert("Password doesn't match");
    else {
        UserServiceClient.instance
            .registerUser(username, password, userType)
            .then(response => {
                if (response.status === 500) {
                    alert('username already exists')
                }
            })
    }
};

export const selectUserType = (dispatch, type) => (
    dispatch({
        type: constants.SAVE_USER_TYPE,
        userType: type
    })
);

export const login = (dispatch, username, password) => (
    UserServiceClient.instance
        .login(username, password)

);

export const updateUser = (user) => (
    UserServiceClient.instance
        .updateUser(user)
        .then(res => {
            if (res.status === 200)
                alert('User Updated Successfully');
            else if (res.status === 500)
                alert('username already taken');
        })
);

export const updateStateWithUserNameAndType = (dispatch, username, type) => (
    dispatch({
        type: constants.SAVE_USERNAME_AND_USERTYPE,
        username: username,
        userType: type
    })
);

export const getProfile = (dispatch) => (
    UserServiceClient.instance
        .profile()
        .then(response => dispatch({
            type: constants.FETCH_PROFILE,
            data: response
        }))
);

export const logout = (dispatch) => (
    UserServiceClient.instance
        .logout()
        .then(() =>
            dispatch({
                type: constants.LOGOUT
            })
        )
);
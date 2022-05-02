import * as constants from '../constants/index';
import AdminServiceClient from "../services/admin.service.client";


export const getUsers = (dispatch) => {
    AdminServiceClient.instance
        .getUsers()
        .then(response => response.json()
            .then(users => {
                dispatch({
                    type: constants.ADMIN_SAVE_USERS,
                    users: users
                })
            }))
};

export const updateUserAdmin = (dispatch, user) => {
    AdminServiceClient.instance
        .updateUser(user)
        .then(() => AdminServiceClient.instance
            .getUsers()
            .then(response => response.json()
                .then(users => {
                    dispatch({
                        type: constants.ADMIN_SAVE_USERS,
                        users: users
                    })
                })));
};

export const deleteUserAdmin = (dispatch, id) => {
    AdminServiceClient.instance
        .deleteUser(id)
        .then(() => AdminServiceClient.instance
            .getUsers()
            .then(response => response.json()
                .then(users => {
                    dispatch({
                        type: constants.ADMIN_SAVE_USERS,
                        users: users
                    })
                })));
};


export const findAllFavoriteMovies = (dispatch) => {
    AdminServiceClient.instance
        .findAllFavoriteMovies()
        .then(response => {
            response.json()
                .then(res => dispatch({
                    type: constants.ALL_FAVORITE_MOVIES,
                    data: res
                }))
        })
};


export const deleteFavoriteMovie = (dispatch, favoriteMovie, user) => {
    AdminServiceClient.instance
        .deleteFavoriteMovie(favoriteMovie, user)
        .then(() => {
            alert('Deleted favorite movie!');
            AdminServiceClient.instance
                .findAllFavoriteMovies()
                .then(response => {
                    response.json()
                        .then(res => dispatch({
                            type: constants.ALL_FAVORITE_MOVIES,
                            data: res
                        }))
                })
        })
};

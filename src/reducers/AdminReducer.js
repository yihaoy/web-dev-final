import * as constants from '../constants';

let adminInitialState = {
    users: [],
    allFavoriteMovies: []
};

const adminReducer = (state = adminInitialState, action) => {
    let newState;

    switch (action.type) {

        case constants.ADMIN_SAVE_USERS:
            newState = Object.assign({}, state);
            newState.users = action.users;
            return newState;

        case constants.ALL_FAVORITE_MOVIES:
            newState = Object.assign({}, state);
            newState.allFavoriteMovies = action.data;
            return newState;

        default:
            return state;
    }
};

export default adminReducer;
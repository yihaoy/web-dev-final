import * as constants from '../constants';

let criticInitialState = {
    reviews: [],
    userReviews: [],
    review: {},
    critic: {},
    reviewTitle: '',
    reviewText: ''

};

const criticReducer = (state = criticInitialState, action) => {
    let newState;

    switch (action.type) {

        case constants.TEXT_CHANGED:
            newState = Object.assign({}, state);
            if (action.fieldType === 'reviewTitle') {
                newState.reviewTitle = action.text
            } else if (action.fieldType === 'reviewText') {
                newState.reviewText = action.text;
            }
            return newState;

        case constants.CREATE_REVIEW:
            newState = Object.assign({}, state);
            newState.review = action.review;
            return newState;

        case constants.FIND_ALL_REVIEWS_FOR_MOVIE:
            newState = Object.assign({}, state);
            newState.reviews = action.reviews;
            return newState;

        case constants.FIND_USER_BY_ID:
            newState = Object.assign({}, state);
            newState.critic = action.critic;
            return newState;

        case constants.ALL_REVIEWS_FOR_USER:
            newState = Object.assign({}, state);
            newState.userReviews = action.userReviews;
            return newState;

        case constants.TOGGLE_EVENT:
            newState = Object.assign({}, state);
            console.log(action.id);
            newState.eventModalToggle = action.id;
            return newState;

        // case constants.PREVIEW:
        //     return{
        //         review: state.review,
        //         preview: !state.preview
        //     }

        default:
            return state;
    }
};

export default criticReducer;
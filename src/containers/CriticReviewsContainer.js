import {connect} from 'react-redux';
import * as reviewActions from "../actions/review";
import CriticReviews from '../components/CriticReviews';

const dispatcherToPropsMapper = (dispatch) => ({
    findAllReviewsForMovie: (movieId) => reviewActions.findAllReviewsForMovie(dispatch, movieId),
    createReview: (review) => reviewActions.createReview(dispatch, review)
})

const stateToPropsMapper = (state) => ({
    movie: state.movieReducer.movie,
    review: state.criticReducer.review,
    reviews: state.criticReducer.reviews,
    type: state.userReducer.userType,
    loggedIn: state.userReducer.loggedIn
})

export const CriticReviewsContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(CriticReviews);
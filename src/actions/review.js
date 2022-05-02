import * as constants from '../constants/index';
import CriticServiceClient from '../services/critic.service.client'

export const textChanged = (dispatch, type, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        fieldType: type,
        text: newText
    })
);

export const createReview = (dispatch, review) => {
    CriticServiceClient.instance
        .createReview(review)
        .then(response => {
            CriticServiceClient.instance
                .findAllReviewsForMovie(review.movieId)
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.FIND_ALL_REVIEWS_FOR_MOVIE,
                                reviews: res
                            })
                        })
                })
        })
};

export const findAllReviewsForMovie = (dispatch, movieId) => {
    CriticServiceClient.instance
        .findAllReviewsForMovie(movieId)
        .then(response => response.json()
            .then(result =>
                dispatch({
                    type: constants.FIND_ALL_REVIEWS_FOR_MOVIE,
                    reviews: result
                })))
};

export const findAllReviewsForUser = (dispatch) => {
    CriticServiceClient.instance
        .findAllReviewsForUser()
        .then(response => response.json()
            .then(result =>
                dispatch({
                    type: constants.ALL_REVIEWS_FOR_USER,
                    userReviews: result
                })))
};


export const findUserById = (dispatch, criticId) => {
    CriticServiceClient.instance
        .findUserById(criticId)
        .then(response => response.json()
            .then(result =>
                dispatch({
                    type: constants.FIND_USER_BY_ID,
                    critic: result
                })))
};

export const updateReview = (dispatch, review) => {
    CriticServiceClient.instance
        .updateReview(review)
        .then(response => findAllReviewsForUser(dispatch))
};

export const toggleReview = (dispatch, id) => (
    dispatch({
        type: constants.TOGGLE_EVENT,
        id: id
    })
);

export const deleteReview = (dispatch, review) => {
    let criticServiceClient = CriticServiceClient.instance;
    criticServiceClient
        .deleteReview(review._id)
        .then(response => {
            criticServiceClient
                .findAllReviewsForUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_REVIEWS_FOR_USER,
                                userReviews: res
                            })
                        })
                })
        })
};
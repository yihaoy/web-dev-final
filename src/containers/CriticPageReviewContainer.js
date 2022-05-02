import {connect} from 'react-redux'
import CriticPageReview from '../components/CriticPageReview'
import * as actions from "../actions/review";

    const dispatchToPropsMapper = dispatch => ({
        textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
        findAllReviewsForUser: () => actions.findAllReviewsForUser(dispatch),
        deleteReview: (review) => actions.deleteReview(dispatch, review),
        toggleReview: (id) => actions.toggleReview(dispatch, id),
        updateReview: (review) => actions.updateReview(dispatch,review)
});

const stateToPropsMapper = state => ({
    username: state.userReducer.username,
    userReviews: state.criticReducer.userReviews
});

const CriticPageReviewContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(CriticPageReview);
export default CriticPageReviewContainer;

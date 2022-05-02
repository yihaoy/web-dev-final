import * as constants from '../constants'

let _singleton = Symbol();

class CriticServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CriticServiceClient(_singleton);
        return this[_singleton]
    }


    createReview(review) {
        return fetch(constants.BASE_URL + 'review', {
            method: 'post',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
    }

    findAllReviewsForMovie(movieId) {
        return fetch(constants.BASE_URL + 'review/' + movieId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    findAllReviewsForUser() {
        return fetch(constants.BASE_URL + 'review', {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    findUserById(criticId) {
        return fetch(constants.BASE_URL + 'user/' + criticId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    deleteReview(reviewId){
        return fetch(constants.BASE_URL + 'review/' + reviewId,{
            method: 'delete',
            credentials: "include"
        })
    }

    updateReview(review){
        console.log("updateReview",review);
        return fetch(constants.BASE_URL + 'review' , {
            method: 'put',
            body:JSON.stringify(review),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}

export default CriticServiceClient;
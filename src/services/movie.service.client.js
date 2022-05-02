import * as constants from '../constants'

let _singleton = Symbol();

class MovieServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new MovieServiceClient(_singleton);
        return this[_singleton]
    }


    getFavoriteMovies() {
        return fetch(constants.BASE_URL + 'movie/favorites', {
            credentials: 'include'
        })
    }

    getWatchlistMovies() {
        return fetch(constants.BASE_URL + 'movie/watchlist', {
            credentials: 'include'
        })
    }

    saveDislike(movie) {
        return fetch(constants.BASE_URL + 'dislikeMovie',{
            method: 'delete',
            credentials: "include",
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    removeMovieFromWatchlist(movie) {
        return fetch(constants.BASE_URL + `movie/${movie._id}/watchlist`,{
            method: 'delete',
            credentials: "include",
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    unrecommendMovie(item) {
        return fetch(constants.BASE_URL + 'unrecommendMovie',{
            method: 'delete',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getRecommendedMovies() {
        return fetch(constants.BASE_URL + 'recommendedMovies', {
            credentials: 'include'
        })
    }
}

export default MovieServiceClient;
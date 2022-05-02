import * as constants from '../constants';

let movieInitialState = {
    //movies
    nowPlayingMovies: [],
    upcomingMovies: [],
    movies: [],
    movie: {},
    sortToggleOpen: false,
    orderToggleOpen: false,
    sortValue: 'popularity',
    orderValue: 'desc',
    favorite: {favorite: true},
    watchlist: {watchlist: true},
    favoriteMovies: [],
    watchlistMovies: []
};

const movieReducer = (state = movieInitialState, action) => {
    let newState;
    switch (action.type) {
        //Movies
        case constants.FIND_NOW_PLAYING_MOVIES:
            return {
                nowPlayingMovies: action.nowPlayingMovies.results,
                upcomingMovies: state.upcomingMovies,
                movies: state.movies,
                movie: state.movie
            }

        case constants.FIND_UPCOMING_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: action.upcomingMovies.results,
                movies: state.movies,
                movie: state.movie
            }

        case constants.DISCOVER_MOVIES:
            return {
                movies: action.movies.results,
                sortValue: state.sortValue,
                orderValue: state.orderValue,
                favorite: state.favorite,
                watchlist: state.watchlist
            }

        case constants.TOGGLE_SORT_DROPDOWN:
            return {
                movies: state.movies,
                sortToggleOpen: !state.sortToggleOpen,
                orderToggleOpen: state.orderToggleOpen,
                sortValue: state.sortValue,
                orderValue: state.orderValue,
                favorite: state.favorite,
                watchlist: state.watchlist
            }

        case constants.TOGGLE_ORDER_DROPDOWN:
            return {
                movies: state.movies,
                sortToggleOpen: state.sortToggleOpen,
                orderToggleOpen: !state.orderToggleOpen,
                sortValue: state.sortValue,
                orderValue: state.orderValue,
                favorite: state.favorite,
                watchlist: state.watchlist
            }

        case constants.SET_SORT_DROPDOWN_VALUE:
            return {
                movies: state.movies,
                sortToggleOpen: state.sortToggleOpen,
                orderToggleOpen: state.orderToggleOpen,
                sortValue: action.sortValue,
                orderValue: state.orderValue,
                favorite: state.favorite,
                watchlist: state.watchlist
            }

        case constants.SET_ORDER_DROPDOWN_VALUE:
            return {
                movies: state.movies,
                sortToggleOpen: state.sortToggleOpen,
                orderToggleOpen: state.orderToggleOpen,
                sortValue: state.sortValue,
                orderValue: action.orderValue,
                favorite: state.favorite,
                watchlist: state.watchlist
            }

        case constants.FIND_POPULAR_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results,
                movie: state.movie
            }

        case constants.SEARCH_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results,
                movie: state.movie
            }

        case constants.FIND_MOVIE_DETAILS:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: state.results,
                movie: action.movie
            }

        case constants.FAVORITE_MOVIE:
            return {
                movies: state.movies,
                favorite: action.favorite,
                watchlist: state.watchlist
            }

        case constants.WATCHLIST_MOVIE:
            return {
                movies: state.movies,
                watchlist: action.watchlist,
                favorite: state.favorite,
            }

        case constants.FETCH_FAVORITE_MOVIES:
            newState = Object.assign({}, state);
            newState.favoriteMovies = action.favoriteMovies.favorites;
            return newState;

        case constants.FETCH_WATCHLIST_MOVIES:
            newState = Object.assign({}, state);
            newState.watchlistMovies = action.watchlistMovies.watchList;
            return newState;

        default:
            return state;
    }
};

export default movieReducer;
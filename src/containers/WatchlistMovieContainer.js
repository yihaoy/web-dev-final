import {connect} from "react-redux";
import * as actions from "../actions/movie";
import WatchlistMovies from "../components/WatchlistMovies";

const dispatchToPropsMapper = dispatch => ({
    fetchWatchlistMovies: () =>
        actions.fetchWatchlistMovies(dispatch),
    removeMovieFromWatchlist: (movie) =>
        actions.removeMovieFromBookmark(dispatch, movie),
    findMovieDetails: (movieId) => actions.findMovieDetails(dispatch, movieId)
});
const stateToPropsMapper = state => ({
    watchlistMovies: state.movieReducer.watchlistMovies
});
const WatchlistMoviesContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(WatchlistMovies);
export default WatchlistMoviesContainer;
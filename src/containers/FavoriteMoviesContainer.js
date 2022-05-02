import FavoriteMovies from "../components/FavoriteMovies";
import {connect} from "react-redux";
import * as actions from "../actions/movie";

const dispatchToPropsMapper = dispatch => ({
    fetchFavouriteMovies: () =>
        actions.fetchFavouriteMovies(dispatch),
    dislikeMovie: (movie) =>
        actions.dislikeMovie(dispatch, movie)
});
const stateToPropsMapper = state => ({
    favoriteMovies: state.movieReducer.favoriteMovies
});
const FavoriteMoviesContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(FavoriteMovies);
export default FavoriteMoviesContainer;
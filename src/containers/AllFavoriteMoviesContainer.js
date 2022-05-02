import {connect} from "react-redux";
import AllFavoriteMovies from '../components/AllFavoriteMovies'
import * as actions from "../actions/admin";

const dispatchToPropsMapper = dispatch => ({
    findAllFavoriteMovies: () => actions.findAllFavoriteMovies(dispatch),
    deleteFavoriteMovie: (favoriteMovie, user) => actions.deleteFavoriteMovie(dispatch, favoriteMovie, user)
});
const stateToPropsMapper = state => ({
    allFavoriteMovies: state.adminReducer.allFavoriteMovies
});

const AllFavoriteMoviesContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AllFavoriteMovies);
export default AllFavoriteMoviesContainer;
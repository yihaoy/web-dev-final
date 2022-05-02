import React from 'react'
import {Link} from 'react-router-dom';
import FavoriteMovieItem from './FavoriteMovieItem';
import '../styles/login.css';

class FavoriteMovies extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchFavouriteMovies();

    }

    showFavoriteMovies() {
        if (this.props.favoriteMovies) {
            return this.props.favoriteMovies.map((movie) => (
                <div className="col-sm-3"
                     key={movie._id}>
                    <FavoriteMovieItem movie={movie}
                                       dislikeMovie={this.props.dislikeMovie}/>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="border shadow p-3 mb-5 border-light">
                    <h1 className="display-3">Favorite Movies</h1>
                    <p className="lead">All your favorite movies:</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <button className="btn btn-outline-dark">
                            <span><i className="fa fa-arrow-left mr-2"/></span>
                            My Page
                        </button>
                    </Link>
                    <div className="card-deck row">
                        {this.showFavoriteMovies()}
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoriteMovies;
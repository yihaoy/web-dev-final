import React from 'react'
import {Link} from 'react-router-dom';
import WatchlistMovieItem from './WatchlistMovieItem';
import '../styles/login.css';

class WatchlistMovies extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchWatchlistMovies();
    }

    showWatchlistMovies() {
        if (this.props.watchlistMovies) {
            return this.props.watchlistMovies.map((movie) => (
                <div className="col-sm-3"
                     key={movie._id}>
                    <WatchlistMovieItem movie={movie}
                                        removeMovieFromBookmark={this.props.removeMovieFromWatchlist}/>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="border shadow p-3 mb-5 border-light">
                    <h1 className="display-3">Watchlist Movies</h1>
                    <p className="lead">All your Watchlist movies:</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <button className="btn btn-outline-dark">
                            <span><i className="fa fa-arrow-left mr-2"/></span>
                            My Page
                        </button>
                    </Link>
                    <div className="card-deck row">
                        {this.showWatchlistMovies()}
                    </div>
                </div>
            </div>
        )
    }
}

export default WatchlistMovies;
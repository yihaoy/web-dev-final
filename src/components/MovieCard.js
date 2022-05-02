import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({movie, image, page, favouriteMovie, watchListMovie, watchlist, favorite, type, loggedIn}) => {
    if (page === 'discover') {
        return (

            <div className='col-lg-3 col-md-4 col-sm-6 mt-2'>
                <div className='card h-100'>
                    <Link to={`/movie/${movie.id}`}>
                        <img className="card-img-top" src={image} alt="Card image cap"/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <div hidden={type !== 'Fan' || !loggedIn}
                             className="row mt-2 ml-1">
                            <i className='fa fa-heart'
                               data-toggle="tooltip" data-placement="bottom" title="Add to Favorites"
                               onClick={() => {
                                favouriteMovie(movie, favorite);
                                alert(movie.title + ' added to favorites');
                            }}/>
                            <i className='fa fa-bookmark ml-2'
                               data-toggle="tooltip" data-placement="bottom" title="Add to Watchlist"
                               onClick={() => {
                                watchListMovie(movie, watchlist);
                                alert(movie.title + ' added to watchlist');
                            }}/>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        Vote Average: {movie.vote_average}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='card h-100'>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                    </div>
                    <div className="card-footer text-muted">
                        <Link className='btn btn-outline-info' to={`/movie/${movie.id}`}>View</Link>
                    </div>
                </div>
            </div>
        )
    }
}
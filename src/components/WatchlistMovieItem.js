import React from 'react'
import {Link} from 'react-router-dom';
import * as constants from "../constants";

const WatchlistMovieItem = ({movie, removeMovieFromBookmark}) => {
    let poster = constants.IMAGE_URL + movie.poster_path;
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={poster} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <Link className='btn btn-outline-info' to={`/movie/${movie.id}`}>View</Link>
            </div>
            <div className="card-footer">
                <small className="text-muted bg-light">Release Date: {movie.release_date}</small>
            </div>
            <div className="card-footer bg-light">
                <button type='btn' className="btn btn-outline-danger" onClick={() => removeMovieFromBookmark(movie)}>
                    <span><i className="fa fa-thumbs-down"></i>&nbsp;</span>
                    Unwatch
                </button>
            </div>
        </div>
    )
};

export default WatchlistMovieItem
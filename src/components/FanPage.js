import React from 'react'
import {Link} from 'react-router-dom';

const FanPage = ({username, description}) => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Profile of {username}: </h1>
            <hr className="my-2"/>

            <div className="row">
                <div className="col-sm-4">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Favorite Movies</h5>
                            <p className="card-text">View all your favorite movies:</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/favorite-movies">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Watchlist</h5>
                            <p className="card-text">Here are all the movies you've added to your watchlist!.</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/watchlist-movies">
                                View
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-sm-4">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Fans Followed</h5>
                            <p className="card-text">View all other fans you've followed!</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/fans-followed">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FanPage;
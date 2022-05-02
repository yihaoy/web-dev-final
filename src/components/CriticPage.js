import React from 'react'
import {Link} from 'react-router-dom';

const CriticPage = ({username, description}) => {
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="container-fluid w-75">
                <h1 className="display-4">Profile of {username}: </h1>
                {description !== undefined
                    ? <p className="lead">{description}</p>
                    : <p className="lead">All the good stuff you've been upto on The Movie Network.</p>}
                    <div className="card text-center shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                    <h5 className="card-title">Your Reviews</h5>
                    <p className="card-text">View and manage your reviews!</p>
                    <Link className="btn btn-outline-primary"
                    to="/my-page-critic/manage-reviews">
                    Manage reviews
                    </Link>
                    </div>
                    </div>
                    </div>
                    </div>
                    )
                    };

                export default CriticPage;
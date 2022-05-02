import React from 'react'
import {Link} from 'react-router-dom';
import FollowedFanItem from "./FollowedFanItem";
import '../styles/login.css';

class FollowedFans extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchFollowedFans();
    }

    showFans() {
        if (this.props.followedFans) {
            return this.props.followedFans.map((followedFan) => (
                <div className="col-sm-3"
                     key={followedFan._id}>
                    <FollowedFanItem fan={followedFan}
                                     unfollowFan={this.props.unfollowFan}/>
                </div>
            ))
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="border shadow p-3 mb-5 border-light">
                    <h1 className="display-3">Fans Followed</h1>
                    <p className="lead">All the fans you currently follow</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <button className="btn btn-outline-dark">
                            <span><i className="fa fa-arrow-left mr-2"/></span>
                            My Page
                        </button>
                    </Link>
                    <div className="card-deck row">
                        {this.showFans()}
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowedFans;
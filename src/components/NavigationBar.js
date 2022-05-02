import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from "../actions/login";

const NavigationBarComponent = ({type, logout, loggedIn, username}) => {
    return (
        <nav className="navbar navbar-dark bg-white">
            <Link to="/">
                <button type='btn' className="text-primary btn btn-outline-light">
                    <h1>Movie Club</h1>
                </button>
            </Link>
            <form className="form-inline">
                <div hidden={loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/login">
                        <button type='btn' className="text-primary btn btn-outline-light">Login</button>
                    </Link>
                </div>
                <div hidden={loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/register">
                        <button type='btn' className="text-primary btn btn-outline-light">Registration</button>
                    </Link>
                </div>
                <div hidden={type === undefined || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/profile">
                        <button type='btn' className="text-primary btn btn-outline-light">Profile</button>
                    </Link>
                </div>
                <div hidden={type !== 'Fan' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page">
                        <button type='btn' className="text-primary btn btn-outline-light">{username}'s Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Fan' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/explore">
                        <button type='btn' className="text-primary btn btn-outline-light">Explore</button>
                    </Link>
                </div>
                <div hidden={type !== 'Critic' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page-critic">
                        <button type='btn' className="text-primary btn btn-outline-light">{username}'s Critic Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/all-favourite-movies">
                        <button type='btn' className="text-primary btn btn-outline-light">All Favourite Movies</button>
                    </Link>
                </div>
                <div hidden={type !== 'Admin' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/admin-page">
                        <button type='btn' className="text-primary btn btn-outline-light">Admin Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Actor' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page-actor">
                        <button type='btn' className="text-primary btn btn-outline-light">{username}'s Actor Page</button>
                    </Link>
                </div>
                <div hidden={type !== 'Fan' || !loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to="/my-page/watchlist-movies">
                        <button type='btn' className="text-primary btn btn-outline-light">WatchList</button>
                    </Link>
                </div>
                <div hidden={!loggedIn}>
                    <Link style={{display: 'block', height: '100%'}}
                          className="navbar-nav" to='/' onClick={() => logout()}>
                        <button type='btn' className="text-primary btn btn-outline-light">Logout</button>
                    </Link>
                </div>
            </form>
        </nav>
    )
};
const dispatchToPropsMapper = dispatch => ({
    logout: () => actions.logout(dispatch)
});
const stateToPropsMapper = state => ({
    type: state.userReducer.userType,
    username: state.userReducer.username,
    loggedIn: state.userReducer.loggedIn
});

const NavigationBar = connect(stateToPropsMapper, dispatchToPropsMapper)(NavigationBarComponent);
export default NavigationBar;
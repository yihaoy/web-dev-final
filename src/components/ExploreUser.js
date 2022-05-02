import React from 'react';
import {Link} from 'react-router-dom';


export default class ExploreUser extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllFans();
    }

    renderLikedMovies() {
        if (this.props.items.favorites) {
            console.log(this.props.items.favorites)
            return this.props.items.favorites.map((item, i) => (
                <li key={i}
                    className="list-group-item border-white bg-light">
                    <Link className='btn btn-outline-info col-3'
                          to={`/movie/${item.id}`}>{item.title}
                    </Link>
                </li>
            ))
        }
    }

    renderActorEvents() {
        if (this.props.events.events) {
            return this.props.events.events.map((event, i) => (
                <li key={i}
                    className="list-group-item border-white bg-light">
                    {event.name} at {event.location}
                </li>
            ))
        }
    }

    showContent(fan, id) {
        if (fan.type === "Fan") {
            this.props.getFanContent(id);
        } else if (fan.type === "Actor") {
            this.props.getActorContent(id);
        }
    }

    followFan(id, username) {
        this.props.followFan(id, username);
    }

    renderContent(fan) {
        if (fan.type === "Fan") {
            return (
                <div hidden={fan._id !== this.props.toShowId}
                     className="container-fluid border shadow-lg p-3 mb-3 border-secondary bg-light">
                    <h2 className="font-weight-normal">Movies liked by {fan.username}:</h2>
                    <ul className="list-group border-light">
                        {this.renderLikedMovies()}
                    </ul>
                    <button type='btn' className="btn btn-danger m-3 col-3"
                            onClick={() => this.props.closeContentPane()}>
                        Close
                    </button>
                </div>
            )
        } else if (fan.type === "Actor") {
            return (
                <div hidden={fan._id !== this.props.toShowId}
                     className="container-fluid border shadow-lg p-3 mb-3 border-secondary bg-light">
                    <h2 className="font-weight-normal">Events of {fan.username}:</h2>
                    <ul className="list-group border-light">
                        {this.renderActorEvents()}
                    </ul>
                    <button type='btn' className="btn btn-danger m-3 col-3"
                            onClick={() => this.props.closeContentPane()}>
                        Close
                    </button>
                </div>
            )
        }
    }

    renderfans() {
        if (this.props.fans) {
            return (
                <div>
                    <div>
                        {this.props.fans.map((fan, i) =>
                            (
                                <div key={i}
                                     className="row border shadow p-3 mb-3 border-primary">
                                    <h3 className="col-2 mt-3 ">{fan.type}</h3>
                                    <h5 className="col-2 mt-3 ">{fan.username}</h5>
                                    <p className="col-3">{fan.description}</p>
                                    <div className="col-5 btn-group p-2">
                                        <button hidden={fan.type === "Critic" || fan.type === "Admin" }
                                            type='btn'
                                            className="btn btn-outline-dark m-1"
                                            onClick={() => this.showContent(fan, fan._id)}>
                                            Explore Content
                                        </button>
                                        <button type='btn' className="btn btn-success m-1"
                                                onClick={() => this.followFan(fan._id, fan.username)}>
                                            Follow
                                        </button>
                                    </div>
                                    {this.renderContent(fan)}
                                </div>
                            )
                        )
                        }
                    </div>
                </div>)
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="border shadow p-3 mb-5 border-white">

                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <button className="btn btn-outline-dark mb-3">
                            <span><i className="fa fa-arrow-left mr-2"/></span>
                            My Page
                        </button>
                    </Link>
                    <h1 className="display-4">All Fans and Actors in The Movie Network:</h1>
                    <div className="p-3">
                        {this.renderfans()}
                    </div>
                </div>
            </div>
        )
    }
};

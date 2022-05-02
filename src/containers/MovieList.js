import React from 'react';
import * as constants from '../constants';
import NavBar from '../components/SearchNavBar';
import {MovieCard} from '../components/MovieCard';
import UpcomingMovieCarousel from './UpcomingMovieCarousel';
import NowPlayingList from "./NowPlayingList";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findPopularMovies();
        this.props.findUpcomingMovies();
        this.props.findNowPlayingMovies();
    }

    render() {
        if (this.props.movies) {
            return (
                <div>
                    <NavBar/>

                    <UpcomingMovieCarousel upcomingMovies={this.props.upcomingMovies}/>

                    <div className='row p-2 m-2 ml-4 border border-light rounded'>
                        <h4 className="text-center text-dark">Explore Movies</h4>
                    </div>

                    <div className='row m-2'>
                        <div className='col-9'>
                            <div className="card-deck">
                                {this.props.movies.map((movie, index) => {
                                    let poster = constants.IMAGE_URL + movie.poster_path;
                                    return (
                                        <MovieCard key={index} image={poster} movie={movie}/>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='col-3'>
                            <NowPlayingList nowPlayingMovies={this.props.nowPlayingMovies}/>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="ml-4">
                <h3 >Loading</h3>
            </div>
        );
    }
}
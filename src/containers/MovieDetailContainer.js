import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions/movie";
import * as constants from '../constants/index';
import NavBar from '../components/SearchNavBar';
import '../styles/MovieDetailStyle.css';
import {YoutubeWidget} from '../components/YoutubeWidget';
import UpcomingMovieCarousel from "./UpcomingMovieCarousel";
import {CriticReviewsContainer} from "./CriticReviewsContainer";

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findMovieDetails(this.props.match.params.movieId);

    }

    getReleaseYear(releaseDate) {
        if (releaseDate)
            return releaseDate.split('-')[0];
    }

    renderCastCards(actor, index) {
        return (
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch'>
                <div key={index} className='card'>
                    <img className='card-img-top' src={constants.IMAGE_URL + actor.profile_path} alt='Card image cap'/>
                    <div className='card-body'>
                        <h9 className='headers'>{actor.name}</h9>
                        <br/>
                        <p>{actor.character}</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.movie && this.props.movie.videos && this.props.movie.videos.results.length>0 && this.props.movie.similar) {
            let youtubeUrl = this.props.movie.videos.results[0].key;
            return (
                <div>
                    <NavBar searchMovie={this.props.searchMovie}/>
                    <div className='div-background row mt-5'>
                        <div className='img-content col-lg-3 col-md-4 col-sm-6 ml-5'>
                            <img src={constants.IMAGE_URL + '/' + this.props.movie.poster_path}/>
                        </div>
                        <div className='col-lg-8 col-md-10 col-sm-12 ml-2'>
                            <div className='movie-title'>
                                {this.props.movie.original_title} ({this.getReleaseYear(this.props.movie.release_date)})
                            </div>
                            <div>
                                Score: {this.props.movie.vote_average}
                            </div>
                            <div className='headers'>
                                Overview
                            </div>
                            <div>
                                {this.props.movie.overview}
                            </div>
                            <div className='mt-3'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='headers'>
                                            Genres
                                        </div>
                                        <div className='row'>
                                            {this.props.movie.genres.map((genre, index) => {
                                                return (
                                                    <div key={index} className='col-3 ml-2 btn genre-button'>
                                                        {genre.name}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='headers'>
                                            Runtime
                                        </div>
                                        <div>
                                            {this.props.movie.runtime} mins
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-5'>
                                    <div className='col-6'>
                                        <div className='headers'>
                                            Original Language
                                        </div>
                                        <div>
                                            {this.props.movie.original_language}
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='headers'>
                                            HomePage
                                        </div>
                                        <div>
                                            <a href={this.props.movie.homepage}>{this.props.movie.homepage}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-2 ml-3'>
                        <h3>Top Cast</h3>
                        <div className='card-deck'>
                            {this.props.movie.credits.cast.slice(0, 4).map((actor, index) =>
                                this.renderCastCards(actor, index)
                            )}
                        </div>
                    </div>
                    <div className='container-fluid mt-4 text-center'>
                        <h3>Trailer</h3>
                        <YoutubeWidget src={youtubeUrl}/>
                    </div>
                    <div className='container-fluid'>
                        <h3>Critic Reviews</h3>
                        <CriticReviewsContainer/>
                    </div>
                    <div className='container-fluid'>
                        <h3>Recommendations</h3>
                        <UpcomingMovieCarousel upcomingMovies={this.props.movie.similar.results}/>

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

const dispatcherToPropsMapper = (dispatch) => ({
    findMovieDetails: (movieId) => actions.findMovieDetails(dispatch, movieId),
    searchMovie: (searchText) => actions.searchMovie(dispatch, searchText)
})

const stateToPropsMapper = (state) => ({
    movie: state.movieReducer.movie
})

const MovieDetailsContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(MovieDetail);

export default MovieDetailsContainer;
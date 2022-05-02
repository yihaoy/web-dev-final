import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import {MovieCarouselItem} from "../components/MovieCarouselItem";

class UpcomingMovieCarousel extends React.Component {

    renderMovieCarouselItems(movies) {
        let moviesToRender = null;

        if (movies.length !== 0) {

            let movieArray = [];
            let posterArray = [];

            let movieArrayX;
            let posterArrayX;

            let movie2DArray = [];
            let poster2DArray = [];

            movies.map((movie, index) => {
                let poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                movieArray.push(movie);
                posterArray.push(poster);
            });

            movieArrayX = movieArray.splice(0, Math.floor(movieArray.length / 3) * 3);
            posterArrayX = posterArray.splice(0, Math.floor(posterArray.length / 3) * 3);

            let movieArrayChunk, posterArrayChunk;

            while (movieArrayX.length > 0) {
                movieArrayChunk = movieArrayX.splice(0, 3);
                posterArrayChunk = posterArrayX.splice(0, 3);

                movie2DArray.push(movieArrayChunk);
                poster2DArray.push(posterArrayChunk);
            }

            moviesToRender = movie2DArray.map(
                function (moviesChunk, index) {
                    return <MovieCarouselItem key={index} movies={moviesChunk} images={poster2DArray[index]}/>
                }, this);

        }
        return (moviesToRender);
    }


    render() {
        let movies = this.props.upcomingMovies;
        if (movies) {
            return (
                <div>
                    <Carousel showArrows={true}
                              showStatus={false}
                              autoPlay={true}
                              useKeyboardArrows={true}
                              dynamicHeight={true}
                              infiniteLoop={true}
                              showThumbs={false}>
                        {this.renderMovieCarouselItems(movies)}
                    </Carousel>
                </div>
            );
        }
        else {
            return (

                <div className="ml-4">
                    <h3>Loading</h3>
                </div>
            );
        }
    }
}

export default UpcomingMovieCarousel;

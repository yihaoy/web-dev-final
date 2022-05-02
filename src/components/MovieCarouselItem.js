import React from 'react';
import {Link} from 'react-router-dom';
export const MovieCarouselItem = ({movies, images}) => {
    return (
        <div className="div-background">
            <div className="row">
                <Link className='col-4' to={`/movie/${movies[0].id}`}>
                    <img style={{maxWidth: "350px"}} src={images[0]}/>
                </Link>
                <Link className='col-4' to={`/movie/${movies[1].id}`}>
                    <img style={{maxWidth: "350px"}} src={images[1]}/>
                </Link>
                <Link className='col-4' to={`/movie/${movies[2].id}`}>
                    <img style={{maxWidth: "350px"}} src={images[2]}/>
                </Link>
            </div>
        </div>
    )
}
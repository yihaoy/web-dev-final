import React from 'react';

export const ExternalReviewsListItem = ({externalReview}) => {
    // let image = externalReview.multimedia.filter(attr => attr.format === 'superJumbo');

    let imageSrc = '';
    if (externalReview.multimedia.src) {
        imageSrc = externalReview.multimedia.src;
    } else {
        imageSrc = 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';
    }
    console.log('image: ' + imageSrc);
    let date = new Date(externalReview.date_updated).toLocaleDateString();
    let isRated;
    if (externalReview.mpaa_rating==='' || externalReview.mpaa_rating==='Not Rated'){
        isRated = true;
    } else {
        isRated = false;
    }
    return (
        <div className='list-group-item'>
            <div className="row">
                <div className="col-3">
                    <img className="img-responsive" src={imageSrc} width="300" height="200"/>
                </div>
                <div className="col-9">
                    <a href={externalReview.link.url} target="_blank"><h3>{externalReview.headline}</h3></a>
                    <h5 hidden={isRated}>MPAA Rating: {externalReview.mpaa_rating}</h5>
                    <p>{externalReview.summary_short}</p>
                    <h6>{date}</h6>
                    <p>By {externalReview.byline}</p>
                </div>
            </div>
        </div>
    )
}
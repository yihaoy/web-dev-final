import React from 'react';
import {CriticReviewsListItem} from "./CriticReviewsListItem";

export default class CriticReviews extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.findAllReviewsForMovie(this.props.movie.id);
    }

    componentWillReceiveProps(newProps){
        newProps.findAllReviewsForMovie(newProps.movie.id);
    }

    render() {
        let text;
        let title;
        if (this.props.reviews) {
            return (
                <div>
                    <div hidden={this.props.type !== 'Critic' || !this.props.loggedIn}>
                        <label htmlFor="reviewTitle">Review Title</label>
                        <input className="form-control"
                               ref={node => title = node}
                               id="reviewTitle"
                            // onChange={this.titleChanged}
                               placeholder="Review Title"/>
                        <label htmlFor="review-text">Write Review</label>
                        <textarea ref={node => text = node}
                                  className="form-control"
                                  placeholder="Write review"
                                  id="review-text">
                </textarea>
                        <button onClick={() => {
                            this.props.createReview({
                                title: title.value,
                                text: text.value,
                                movieName: this.props.movie.original_title,
                                movieId: this.props.movie.id
                            })
                            // this.props.findAllReviewsForMovie(this.props.movieId);
                        }}
                                className="btn btn-primary btn-block">
                            Submit
                        </button>
                    </div>
                    <div className='card-deck'>
                        {this.props.reviews.map((review, index) => {
                            return (
                                <CriticReviewsListItem key={index}
                                                       review={review}/>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h3>Loading</h3>
                </div>
            );
        }
    }
}
import React from 'react'
import CriticPageReviewItem from "./CriticPageReviewItem";

export default class CriticPageReview extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllReviewsForUser();
        this.state = {id: ''};
        this.editReview = this.editReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    renderList(userReviews) {
        return userReviews.map((userReview,i) =>
            <div className="list-group-item" key={i}>
                <CriticPageReviewItem
                    userReview={userReview}
                    deleteReview={this.props.deleteReview}
                    toggleReview={this.props.toggleReview}
                    editReview={this.editReview}
                    id={this.state.id}
                    updateReview={this.updateReview}
                    textChanged={this.textChanged}
                    cancelEdit={this.cancelEdit}/>
            </div>
        )
    }

    cancelEdit() {
        this.setState({id: ''})
    }

    textChanged(text, type) {
        if (type === 'reviewTitle') {
            this.setState({reviewTitle: text});
        }
        else if (type === 'reviewText') {
            this.setState({reviewText: text});
        }
    }

    updateReview() {
        this.props.updateReview({

            reviewTitle: this.state.reviewTitle,
            reviewText: this.state.reviewText,
            _id: this.state.id

        });
        this.setState({id: ''})
    }

    editReview(id) {
        this.setState({id: id});
    }

    render() {
        if (this.props.userReviews) {
            return (
                <div className="container-fluid">
                    <div className="list-group">
                        {this.renderList(this.props.userReviews)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="card-deck row">
                    <p>No Reviews</p>
                </div>
            )
        }
    }
}

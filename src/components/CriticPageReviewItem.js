import React from 'react'

const CriticPageReviewItem = (
    {
        userReview,
        deleteReview,
        toggleReview,
        editReview,
        id,
        updateReview,
        textChanged,
        cancelEdit
    }) => {

    let date = new Date(userReview.createdDate).toLocaleDateString();
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded ">
            <div className="card-body">
                {id !== userReview._id && <h4>{userReview.title}</h4>}
                {id !== userReview._id && <h5>Movie: {userReview.movieName}</h5>}
                {id !== userReview._id && <p>Posted on: {date}</p>}
                Review:
                {id !== userReview._id && <h6>{userReview.text}</h6>}


                {id === userReview._id && <input placeholder={userReview.title}
                                                 onChange={(e) => {
                                                     textChanged(e.target.value, 'reviewTitle')
                                                 }}
                                                 className="form-control mb-2"/>}
                {id === userReview._id && <input placeholder={userReview.text}
                                                 className="form-control mb-2"
                                                 onChange={(e) => {
                                                     textChanged(e.target.value, 'reviewText')
                                                 }}/>}
                {id !== userReview._id && <button type='btn'
                                             className='btn btn-outline-dark mb-lg-2 w-100'
                                             onClick={() => editReview(userReview._id)}>Edit</button>}

                {id !== userReview._id && <button type='btn'
                                             className='btn btn-outline-danger mb-lg-2 w-100'
                                             onClick={() => deleteReview(userReview)}>Delete</button>}
                 
                {id === userReview._id && <button type='btn' className='btn btn-outline-danger w-100'
                                                  onClick={() => cancelEdit(userReview._id)}>Cancel</button>}

                {id === userReview._id && <button type='btn' className='btn btn-outline-success w-100'
                                             onClick={() => updateReview(userReview._id)}>Update</button>}
            </div>
        </div>
    )
};
export default CriticPageReviewItem;
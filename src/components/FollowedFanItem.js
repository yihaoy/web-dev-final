import React from 'react'

const FollowedFanItem = ({fan, unfollowFan}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
                <h5 className="card-title">{fan.username}</h5>
                {fan.description !== undefined ? <p>{fan.description}</p> :
                    <p>No Description Available</p>}
            </div>
            <div className="card-footer ">
                <button type='btn' className="btn btn-outline-danger" onClick={() => unfollowFan(fan)}>
                    <span><i className="fa fa-trash">&nbsp;</i></span>
                    Unfollow
                </button>
            </div>
        </div>
    )
};

export default FollowedFanItem
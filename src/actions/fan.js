import * as constants from '../constants/index';
import FanServiceClient from '../services/fan.service.client'

export const findAllFans = (dispatch) => {
    FanServiceClient.instance
        .findAllFans()
        .then(response => response.json()
            .then(result =>
                dispatch({
                    type: constants.ALL_FANS_RESULTS,
                    fans: result
                })))
};

export const followFan = (dispatch, id, username) => {
    FanServiceClient.instance
        .followFan(id)
        .then(response => {
            if (response.status === 501) {
                alert('Already Followed ' + username);
            }
            else {
                alert('Followed Fan ' + username);
            }
        })
};

export const getFanContent = (dispatch, id) => {
    FanServiceClient.instance
        .getFanContent(id)
        .then(response => response.json()
            .then(result => dispatch({
                type: constants.FAN_LIKED_RESULTS,
                items: result
            }))
        )
    dispatch({
        type: constants.OPEN_FAN_DETAILS,
        id: id
    })
};

export const getActorContent = (dispatch, id) => {
    FanServiceClient.instance
        .getActorContent(id)
        .then(response => response.json()
            .then(result => dispatch({
                type: constants.ACTOR_EVENT_RESULTS,
                events: result
            }))
        )
    dispatch({
        type: constants.OPEN_FAN_DETAILS,
        id: id
    })
};

export const closeContentPane = (dispatch) => {
    dispatch({
        type: constants.CLOSE_FAN_DETAILS,
    })
};

export function fetchFollowed(dispatch) {
    FanServiceClient.instance
        .getFollowedFansForUser()
        .then(response => {
            response.json()
                .then((result) => {
                    dispatch({
                        type: constants.FETCH_FOLLOWING,
                        followedFans: result
                    })
                });
        });
}

export function unfollowFan(dispatch, fan) {
    FanServiceClient.instance
        .unfollowFan(fan)
        .then(response => {
            alert('Un-followed Fan ' + fan.username);
            FanServiceClient.instance
                .getFollowedFansForUser()
                .then(response => {
                    response.json()
                        .then((result) => {
                            dispatch({
                                type: constants.FETCH_FOLLOWING,
                                followedFans: result
                            })
                        });
                });
        })
}
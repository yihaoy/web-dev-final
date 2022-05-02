import * as constants from '../constants';

let fanInitialState = {
    //fan
    followedFans: [],
    fanResults: [],
    fanItems: [],
    actorEvents: [],
    fanDetailsId: '',
};

const fanReducer = (state = fanInitialState, action) => {
    let newState;

    switch (action.type) {

        case constants.ALL_FANS_RESULTS:
            newState = Object.assign({}, state);
            newState.fanResults = action.fans;
            return newState;

        case constants.FAN_LIKED_RESULTS:
            newState = Object.assign({}, state);
            newState.fanItems = action.items;
            return newState;

        case constants.ACTOR_EVENT_RESULTS:
            newState = Object.assign({}, state);
            newState.actorEvents = action.events;
            return newState;

        case constants.OPEN_FAN_DETAILS:
            newState = Object.assign({}, state);
            newState.fanDetailsId = action.id;
            return newState;

        case constants.CLOSE_FAN_DETAILS:
            newState = Object.assign({}, state);
            newState.fanDetailsId = '';
            return newState;

        case constants.FETCH_FOLLOWING:
            console.log(action.followedFans);
            newState = Object.assign({}, state);
            newState.followedFans = action.followedFans;
            return newState;

        default:
            return state;
    }
};

export default fanReducer;
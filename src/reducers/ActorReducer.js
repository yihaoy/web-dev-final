import * as constants from '../constants';

let actorInitialState = {
    //fan
    eventLocation: '',
    eventName: '',
    eventDate: '',
    eventDesc: '',
    eventsForActor: [],
    eventModalToggle: '',
    eventsNearUser: {
        'tn': [],
        'lr': []
    },
};

const actorReducer = (state = actorInitialState, action) => {
    let newState;

    switch (action.type) {

        case constants.TEXT_CHANGED:
            newState = Object.assign({}, state);
            if (action.fieldType === 'eventLocation') {
                newState.eventLocation = action.text
            } else if (action.fieldType === 'eventName') {
                newState.eventName = action.text;
            } else if (action.fieldType === 'venueName') {
                newState.venueName = action.text;
            } else if (action.fieldType === 'eventDate') {
                newState.eventDate = action.text;
            } else if (action.fieldType === 'eventDesc') {
                newState.eventDesc = action.text;
            }
            return newState;

        case constants.ALL_EVENTS_FOR_ACTOR:
            newState = Object.assign({}, state);
            newState.eventsForActor = action.events;
            return newState;

        case constants.TOGGLE_EVENT:
            newState = Object.assign({}, state);
            console.log(action.id);
            newState.eventModalToggle = action.id;
            return newState;

        default:
            return state;
    }
};

export default actorReducer;
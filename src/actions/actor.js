import * as constants from '../constants/index';
import EventServiceClient from '../services/event.service.client'

export const textChanged = (dispatch, type, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        fieldType: type,
        text: newText
    })
);

export const createEvent = (dispatch, eventName, venueName, eventDate, eventDesc) => {
    console.log(eventName, venueName, eventDate, eventDesc);
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .createEvent(eventName, venueName, eventDate, eventDesc)
        .then(response => {
            eventServiceClient
                .findAllEventsOfUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_EVENTS_FOR_ACTOR,
                                events: res.events
                            })
                        })
                })
        })
};

export const findAllEventsOfUser = (dispatch) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .findAllEventsOfUser()
        .then(response => {
            response.json()
                .then(res => {
                    dispatch({
                        type: constants.ALL_EVENTS_FOR_ACTOR,
                        events: res.events
                    })
                })
        })
};

export const updateEvent = (dispatch, event) => {
    EventServiceClient.instance
        .updateEvent(event)
        .then(response => findAllEventsOfUser(dispatch))
};

export const toggleEvent = (dispatch, id) => (
    dispatch({
        type: constants.TOGGLE_EVENT,
        id: id
    })
);

export const deleteEvent = (dispatch, event) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .deleteEvent(event._id)
        .then(response => {
            eventServiceClient
                .findAllEventsOfUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_EVENTS_FOR_ACTOR,
                                events: res.events
                            })
                        })
                })
        })
};
import * as constants from '../constants'

let _singleton = Symbol();

class EventServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new EventServiceClient(_singleton);
        return this[_singleton]
    }

    createEvent(eventName, venueName, eventDate, eventDesc){
        let event = {
            eventName: eventName,
            venueName: venueName,
            eventDate: eventDate,
            eventDesc: eventDesc
        };
        return fetch(constants.BASE_URL + 'event', {
            method: 'post',
            body: JSON.stringify(event),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    findAllEventsOfUser(){
        return fetch(constants.BASE_URL + 'events',{
            credentials: "include"
        })
    }

    deleteEvent(eventId){
        return fetch(constants.BASE_URL + 'event/' + eventId,{
            method: 'delete',
            credentials: "include"
        })
    }

    findEventsForUser(){
        return fetch(constants.BASE_URL + 'events/nearby' , {
            method: 'get',
            credentials: "include",
        })

    }
    updateEvent(event){
        return fetch(constants.BASE_URL + 'event' , {
            method: 'put',
            body:JSON.stringify(event),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default EventServiceClient;
import {connect} from 'react-redux'
import EventList from "../components/EventList";
import * as actions from "../actions/actor";

const dispatchToPropsMapper = dispatch => ({
    findAllEventsOfUser: () => actions.findAllEventsOfUser(dispatch),
    deleteEvent: (event) => actions.deleteEvent(dispatch, event),
    toggleEvent: (id) => actions.toggleEvent(dispatch, id),
    updateEvent: (event) => actions.updateEvent(dispatch,event)
});

const stateToPropsMapper = state => ({
    events: state.actorReducer.eventsForActor,
    eventModalToggle: state.actorReducer.eventModalToggle
});

const EventContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(EventList);
export default EventContainer;
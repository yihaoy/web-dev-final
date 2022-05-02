import {connect} from 'react-redux'
import ActorEvent from '../components/ActorEvent'
import * as actions from "../actions/actor";

const dispatchToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    createEvent: (eventName, venueName, eventDate, eventDesc) => actions.createEvent(dispatch, eventName, venueName, eventDate, eventDesc)
});

const stateToPropsMapper = state => ({
    username: state.userReducer.username
});

const ActorEventContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ActorEvent);
export default ActorEventContainer;
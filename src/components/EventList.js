import React from 'react'
import EventListItem from "./EventListItem";

export default class EventList extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllEventsOfUser();
        this.state = {id: ''};
        this.editEvent = this.editEvent.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);

        console.log(props);
    }

    renderList(events) {
        console.log("renderList", events);
        return events.map(event =>
            <div className="col-sm-3">
                <EventListItem
                    event={event}
                    deleteEvent={this.props.deleteEvent}
                    toggleEvent={this.props.toggleEvent}
                    eventModalToggle={this.props.eventModalToggle}
                    editEvent={this.editEvent}
                    id={this.state.id}
                    updateEvent={this.updateEvent}
                    textChanged={this.textChanged}
                    cancelEdit={this.cancelEdit}/>
            </div>
        )
    }

    textChanged(text, type) {
        if (type === 'title') {
            this.setState({title: text});
        }
        else if (type === 'loc') {
            this.setState({location: text});
        }
        else if (type === 'date') {
            this.setState({date: text})
        }
        else if (type === 'desc') {
            this.setState({desc: text})
        }
    }

    updateEvent() {
        this.props.updateEvent({
            name: this.state.title,
            location: this.state.location,
            _id: this.state.id,
            date: this.state.date,
            desc: this.state.desc

        });
        this.setState({id: ''})
    }

    editEvent(id) {
        this.setState({id: id});
    }

    cancelEdit() {
        this.setState({id: ''})
    }


    render() {
        if (this.props.events) {
            return (
                <div className="card-deck row">
                    {this.renderList(this.props.events)}
                </div>
            )
        }
        else {
            return (
                <div className="card-deck row">
                    No Events
                </div>
            )
        }
    }
}

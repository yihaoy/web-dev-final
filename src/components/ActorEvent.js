import React from 'react'
import EventContainer from '../containers/EventContainer';
import '../styles/login.css'

const ActorEvent = ({username, textChanged, createEvent}) => {
    let inputElem;
    let inputElem1;
    let inputElem2;
    let inputElem3;

    return (
        <div className="container-fluid w-75">
            <h1 className="display-4">Manage Events</h1>
            <p className="lead">All your promotional events in one place!</p>
            <div className="col-12 bg-dark text-white rounded">
                <p className="lead p-2">Create New Event</p>
            </div>
            <div className="cardRegistration card-container container-fluid rounded bg-light">
                <form className="form-inline m-2">
                    <label htmlFor="eventName" className='col-2'>Enter Event name:</label>
                    &nbsp;
                    <input className="col-9 form-control"
                           id="eventName"
                           onChange={() => textChanged('eventName', inputElem.value)}
                           ref={node => inputElem = node}/>
                </form>
                <br/>

                <form className="form-inline m-2">
                    <label htmlFor="venueName" className='col-2'>Enter Venue Location:</label>
                    &nbsp;
                    <input className="col-9 form-control"
                           id="venueName"
                           onChange={() => textChanged('venueName', inputElem1.value)}
                           ref={node => inputElem1 = node}/>
                </form>
                <br/>

                <form className="form-inline m-2">
                    <label htmlFor="eventDate" className='col-2'>Enter Event Date:</label>
                    &nbsp;
                    <input className="col-9 form-control"
                           id="eventDate"
                           type='date'
                           onChange={() => textChanged('eventDate', inputElem2.value)}
                           ref={node => inputElem2 = node}/>
                </form>
                <br/>

                <form className="form-inline m-2">
                    <label htmlFor="eventDesc" className='col-2'>Enter Event Description:</label>
                    &nbsp;
                    <input className="col-9 form-control"
                           id="eventDesc"
                           onChange={() => textChanged('eventDesc', inputElem3.value)}
                           ref={node => inputElem3 = node}/>
                </form>

                <div className="form-row text-center mt-4">
                    <div className="col-12">
                        <button type='btn'
                                onClick={() => createEvent(inputElem.value, inputElem1.value, inputElem2.value, inputElem3.value)}
                                className='btn btn-outline-success w-75'>
                            Create Event
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12 bg-dark text-white rounded mt-2">
                <p className="lead p-2">Your Promotional Events</p>
            </div>
            <EventContainer/>
        </div>
    )
};

export default ActorEvent;
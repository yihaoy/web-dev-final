import React from 'react'

const EventListItem = (
    {
        event,
        deleteEvent,
        eventModalToggle,
        toggleEvent,
        editEvent,
        id,
        updateEvent,
        textChanged,
        cancelEdit
    }) => {

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded ">
            <div className="card-body">
                {id !== event._id && <h5 className="card-title w-100">{event.name}</h5>}
                {id !== event._id && <p>{event.desc}</p>}
                {id !== event._id && <h6 className="mb-2">Location: {event.location}</h6>}

                {id === event._id && <input placeholder={event.name}
                                            onChange={(e) => textChanged(e.target.value, 'title')}
                                            className="form-control mb-2"/>}
                {id === event._id && <input placeholder={event.location}
                                            className="form-control mb-2"
                                            onChange={(e) => textChanged(e.target.value, 'loc')}/>}
                {id === event._id && <input type='date'
                                            className="form-control mb-2"
                                            onChange={(e) => textChanged(e.target.value, 'date')}/>}
                {id === event._id && <input placeholder="Event Description"
                                            className="form-control mb-2"
                                            onChange={(e) => textChanged(e.target.value, 'desc')}/>}
                {id !== event._id && <button type='btn'
                                             className='btn btn-outline-dark mb-lg-2 w-100'
                                             onClick={() => editEvent(event._id)}>Edit</button>}

                {id !== event._id && <button type='btn'
                                             className='btn btn-outline-danger mb-lg-2 w-100'
                                             onClick={() => deleteEvent(event)}>Delete</button>}

                {id === event._id && <button type='btn' className='btn btn-outline-danger w-100'
                                                  onClick={() => cancelEdit(event._id)}>Cancel</button>}

                {id === event._id && <button type='btn' className='btn btn-outline-success w-100'
                                             onClick={() => updateEvent(event._id)}>Update</button>}
            </div>
            {id !== event._id && <div className="card-footer">
                <small className="text-muted">Date: {event.date.substr(0, 10)}</small>
            </div>}
        </div>
    )
};
export default EventListItem;
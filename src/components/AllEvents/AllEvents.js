import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import'./AllEvents.css'

const AllEvents = () => {
    const[events, setEvents] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/events")
        .then(res=>res.json())
        .then(data=> setEvents(data));
    },[])
    console.log(events);
    return (
        <div className="all-events-row">
            {
                events.map(event=><EventCard event={event} key={event._id}> </EventCard>)
            }
        </div>
    );
};

export default AllEvents;
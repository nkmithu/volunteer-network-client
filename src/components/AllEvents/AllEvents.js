import React from 'react';
import EventCard from '../EventCard/EventCard';
import'./AllEvents.css'

const AllEvents = () => {
    return (
        <div className="all-events-row">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    );
};

export default AllEvents;
import React from 'react';
import Header from '../Header/Header';
import UserEventCard from '../UserEventCard/UserEventCard';
import './UserAllEvents.css'
const UserAllEvents = () => {
    return (
        <div>
            <div className="overlay"></div>
            <Header/>
            <div className="user-events-row">
                <UserEventCard/>
                <UserEventCard/>
                <UserEventCard/>
                <UserEventCard/>
            </div>
        </div>

    );
};

export default UserAllEvents;
import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = () => {
    return (
        <div className="event-card">
            <img src={require('../../images/babySit.png')} alt="" className="event-card-img"/>
            
            <article className="event-card-footer">
                <Link className="event-card-title" to="/userEvents"> Child Support</Link>
            </article>
        </div>
    );
};

export default EventCard;
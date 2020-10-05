import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = (props) => {
    const {title} = props.event;
    return (
        <div className="event-card">
            <img src={require('../../images/foodCharity.png')} alt="" className="event-card-img"/>
            
            <article className="event-card-footer">
                <Link className="event-card-title" to={`/registration/${title}`}> {title}</Link>
            </article>
        </div>
    );
};

export default EventCard;
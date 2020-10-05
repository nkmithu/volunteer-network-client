import React from 'react';
import './UserEventCard.css';

const UserEventCard = () => {
    return (
        <div className="user-event-card">
            <img src={require('../../images/ITHelp.png')} alt="" className="user-event-img"/>
           
            <article>
                <h4>Humanity More</h4>
                <p>29 sep, 2020</p>
            </article>
            <button className="cancel-btn"> Cancel</button>
        </div>
    );
};

export default UserEventCard;
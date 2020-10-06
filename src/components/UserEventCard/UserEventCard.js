import React from 'react';
import './UserEventCard.css';

const UserEventCard = (props) => {
    const {eventName, date, _id} = props.user;

    const handleDeleteUser=(e,id)=>{
        console.log('Clicked');
        e.preventDefault();
        fetch(`https://warm-badlands-90781.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                console.log(result);
                alert('item Deleted');
                windowReload();
            }
        })

    }
    const windowReload=()=>{
        window.location.reload()
    }
    return (
        <div className="user-event-card">
            <img src={require('../../images/ITHelp.png')} alt="" className="user-event-img"/>
           

            <article>
                <h4>{eventName}</h4>
                <p>{date}</p>
            </article>
            <button onClick={(e)=>handleDeleteUser(e, _id)} className="cancel-btn"> Cancel</button>
        </div>
    );
};

export default UserEventCard;
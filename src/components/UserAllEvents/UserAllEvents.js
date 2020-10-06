import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import UserEventCard from '../UserEventCard/UserEventCard';
import './UserAllEvents.css'
const UserAllEvents = () => {
    const [loggedInUser,
        setLoggedInUser] = useContext(UserContext);
    const [users, setUsers] = useState([]);
        
    useEffect(()=>{
            fetch("https://warm-badlands-90781.herokuapp.com/users?email="+ loggedInUser.email)
            .then(res=>res.json())
            .then(data => setUsers(data));
            
        },[loggedInUser.email])

    return (
        
        <div>
            <div className="overlay"></div>
            <Header/>
            <div className="user-events-row">
                {
                    users.map(user=><UserEventCard key={user._id} user ={user}></UserEventCard>)
                }
            </div>
        </div>

    );
};

export default UserAllEvents;
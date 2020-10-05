import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Registration.css';


const Registration = () => {
    const {title} = useParams();
    const [loggedInUser,
        setLoggedInUser] = useContext(UserContext);
        const {name,email} = loggedInUser;
       const [userInfo, setUserInfo] = useState({date: new Date(), description:"", eventName: title})


        const handleOnchange=(e)=>{
            const newUserInfo = {...userInfo};
            if (e.target.name === 'description') {
                newUserInfo.description= e.target.value;
            }
            if (e.target.name === 'date') {
                newUserInfo.date= e.target.value;
            }
            setUserInfo(newUserInfo);
            console.log(newUserInfo);
            
        }


        const handleAddUser=(e)=>{
            e.preventDefault();
            const newUser = {
                ...loggedInUser,
                ...userInfo,
            };
            fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
        }

    return (
        <div>
             <div className="overlay"></div>
            <Header/>
            <div className="login-form-card registration-card">
            <article>
                <h3 className="login-title"> Register As a Volunteer</h3>
                <form action="">
                    <input type="text" name="name" id="name" value={name}/>
                    <input type="email" name="email" id="email" value={email}/>
                    <input type="date" name="date" id="date"/>
                    <input onChange={handleOnchange} type="text" name="description" id="description" placeholder="Description"/>
                    <input type="text" name="eventName" id="eventName" value={title}/>
                    <button onClick={handleAddUser} className="reg-btn"><Link to="/userEvents">Registration</Link></button>
                </form>
                
                
            </article>
        </div>
        </div>
    );
};

export default Registration;
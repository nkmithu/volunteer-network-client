import React from 'react';
import Header from '../Header/Header';
import './Registration.css';


const Registration = () => {
    return (
        <div>
             <div className="overlay"></div>
            <Header/>
            <div className="login-form-card registration-card">
            <article>
                <h3 className="login-title"> Register As a Volunteer</h3>
                <form action="">
                    <input type="text" name="name" id="name" placeholder="Full Name"/>
                    <input type="email" name="email" id="email" placeholder="Username or Email"/>
                    <input type="date" name="date" id="date" placeholder="Date"/>
                    <input type="text" name="description" id="description" placeholder="Description"/>
                    <input type="text" name="eventName" id="eventName" placeholder="Organize books at the library."/>
                    <button className="reg-btn">Registration</button>
                </form>
                
                
            </article>
        </div>
        </div>
    );
};

export default Registration;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';


const Header = () => {
    const [loggedInUser,
        setLoggedInUser] = useContext(UserContext);

        console.log(loggedInUser);
    return (
        <div className="Header-container">
            <figure>
                <img src={require('../../logos/Group 1329.png')} alt="" className="logo"/>
            </figure>
            <article>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Donation</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Blog</a></li>
                    
                </ul>
                { loggedInUser.email ? <h5> {loggedInUser.name} </h5> : <div className="header-btns">
                    <Link className="register-btn" to="/registration">Register</Link>
                    <Link className="admin-btn" to="/adHome">Admin</Link>
                </div>

                }
                
            </article>
            
        </div>
    );
};

export default Header;
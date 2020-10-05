import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSIdeber.css';

const AdminSIdeber = () => {
    return (
        <div className="admin-sidebar">
        
            <img src={require('../../logos/Group 1329.png')} alt="" className="logo"/>
            <div className="admin-menus">
            <Link to="/adHome/volunteerList"> <img src={require('../../logos/users-alt 1.png')} alt="" className="icon"/> Volunteer register list  </Link>
            <Link to="/adHome/addEvents"> <img src={require('../../logos/plus 1.png')} alt="" className="icon"/> Add event  </Link>
            </div>
            
                
        </div>
    );
};

export default AdminSIdeber;
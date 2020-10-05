import React from 'react';
import AdminSidebar from '../AdminSIdeber/AdminSIdeber';
import './AdminHome.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AdminVolunteerList from '../AdminVolunteerList/AdminVolunteerList';
import AddEvents from '../AddEvents/AddEvents';

const AdminHome = () => {
    return (
        <Router>
            <div>
                <div className="overlay"></div>

                <main className="admin-container">
                        <section>
                        <AdminSidebar/>
                        </section>
                        <section className="admin-content">
                        <Switch>
                            <Route path="/adHome/volunteerList">
                                <AdminVolunteerList/>
                            </Route>
                            <Route path="/adHome/addEvents">
                                <AddEvents/>
                            </Route>
                        </Switch>
                        </section>
                </main>

            </div>

        </Router>

    );
};

export default AdminHome;
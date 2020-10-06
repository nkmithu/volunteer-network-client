import React, {createContext, useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserAllEvents from './components/UserAllEvents/UserAllEvents';
import AdminHome from './components/AdminHome/AdminHome';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

    const [loggedInUser,
        setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <PrivateRoute path="/userEvents">
                        <UserAllEvents/>
                    </PrivateRoute>
                    <PrivateRoute path="/registration/:title">
                    <Registration/>
                    </PrivateRoute>
                    <Route path="/adHome/addEvents">
                        <AdminHome/>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>

    );
}

export default App;

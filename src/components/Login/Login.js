import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Login.css';

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../App';

const Login = () => {

    const [loggedInUser,
        setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {
        from: {
            pathname: "/"
        }
    };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase
            .auth
            .GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                 console.log(result);
                const {displayName, email} = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
          <div className="overlay"></div>
          <Header/>
            <div className="login-form-card">
                <article>
                    <h3 className="login-title"> Login With</h3>
                    <button onClick={handleGoogleSignIn} className="login-btn"> <img src={require('../../images/Google.svg')} alt=""/> Continue with Google</button>
                    <p>Don't Have an account?<span> <Link to="/registration">Create Account</Link></span></p>
                </article>
            </div>
        </div>
       
    );
};

export default Login;
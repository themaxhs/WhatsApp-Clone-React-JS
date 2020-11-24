import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();
    
//funtion to signin with google firebase
    const singIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/80px-WhatsApp.svg.png" alt=""/>
                <div className="login__text">
                    <h1>Sing in to WhatsApp</h1>
                </div>

                <Button onClick={singIn}>
                    Sing in with google
                </Button>
            </div>
        </div>
    );
}

export default Login

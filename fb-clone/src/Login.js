import React from 'react';
import "./login.css";
import { Button } from '@mui/material';
import { auth, provider } from "./firebase";
import {actionTypes} from "./Reducer";
import { useStateValue} from "./StateProvider";

function Login() {
    const[state,dispatch] = useStateValue();

    const signIn = () => {
        // sign in..
        auth
        .signInWithPopup(provider)
        .then(result =>{

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });

            console.log(result)
        }) 
        .catch((error) => alert(error.message));

    };
  return (
    <div className='login'>
       <div className ="login__logo">
        <img src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt = ""
            />
        <img className='lettered__logo' src = "https://upload.wikimedia.org/wikipedia/commons/archive/8/89/20210720031429%21Facebook_Logo_%282019%29.svg"
            alt = ""
            />
        </div> 
        <Button type="submit" onClick={signIn}>
         Sign In
         </Button>   
    </div>
  );
}

export default Login;
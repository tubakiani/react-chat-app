import React from 'react';
import googleicon from '../assets/google.svg';
import styles from './Login.module.css';
import { auth } from '../firebase';
import firebase from 'firebase';

function Login() {
  return (
    <div className={styles.loginPage}>
        <div className={styles.loginCard}>
            <h1>Welcome to Nekogram!</h1>
            <div 
            className={styles.button}
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <img src={googleicon} alt="icon" /> Sign in with Google
            </div>
        </div>
    </div>
  )
}

export default Login
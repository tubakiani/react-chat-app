import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyATMKpGjltAdT3-WOnzHuEfFpMkqYxpPms",
    authDomain: "nekogram-f8d66.firebaseapp.com",
    projectId: "nekogram-f8d66",
    storageBucket: "nekogram-f8d66.appspot.com",
    messagingSenderId: "141962309268",
    appId: "1:141962309268:web:da11e9649608fdc0830e81"
  }).auth();

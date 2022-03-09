// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDijxQFA1_Q5tKG3w7wGLLvTcFr_WyLRf8",
    authDomain: "challenge-efeab.firebaseapp.com",
    projectId: "challenge-efeab",
    storageBucket: "challenge-efeab.appspot.com",
    messagingSenderId: "706231230722",
    appId: "1:706231230722:web:a50e09bf35e423c400e21b",
    measurementId: "G-S9DCTC6Z9N"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
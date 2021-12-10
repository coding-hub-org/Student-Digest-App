import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {API_KEY,MSI,APP_ID} from "@env";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: `${API_KEY}`,
    authDomain: "student-digest-app.firebaseapp.com",
    databaseURL: "https://student-digest-app-default-rtdb.firebaseio.com",
    projectId: "student-digest-app",
    storageBucket: "student-digest-app.appspot.com",
    messagingSenderId: `${MSI}`,
    appId: `${APP_ID}`,
    measurementId: "${config.measurementId}"
};
  
firebase.initializeApp(firebaseConfig);

const doSignIn = (onSucess, onFail) =>{
    return async(email, password) =>{
        try{
            let credential = await firebase.auth().signInWithEmailAndPassword(email,password);
            if (onSucess) onSucess(credential);
        }catch(error){
            console.log(error);
            if (onFail) onFail();
        }  
    }
}

const doSignUp = (onSucess, onFail) =>{
    return async(email, password, name) =>{
        try{
            let credential = await firebase.auth().createUserWithEmailAndPassword(email,password);
            if (onSucess) {
                onSucess(email,name);
            }
        }catch(error){
            console.log(error);
            if (onFail) onFail();
        }  
    }
}

const doSignOut = (onSucess, onFail) =>{
    return async() =>{
        try{
            await firebase.auth().signOut();
            if (onSucess) onSucess();
        }catch(error){
            console.log(error);
            if (onFail) onFail();
        }  
    }
}
export {doSignIn, doSignUp, doSignOut}
export default React.createContext(
    {
        isAuthed:false,
        signIn:()=>{},
        signUp:()=>{},
        signOut:()=>{}
    });


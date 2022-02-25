import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {API_KEY,MSI,APP_ID} from "@env";
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

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
            await AsyncStorage.setItem("credentails", JSON.stringify({email : email, password : password}));
            let credential = await firebase.auth().signInWithEmailAndPassword(email,password);
            if (onSucess) onSucess(credential);
        }catch(error){
            try {
                await AsyncStorage.removeItem('credentails');
              } catch(e) {
                console.log("could not remove bad cred");
              }
            Toast.show({
                type: 'error',
                text1: 'Bad Email/Password!',
              });
            console.log(error);
            if (onFail) onFail();
            return "bad-email";
        }  
    }
}

const doSignUp = (onSucess, onFail) =>{
    return async(email, password, name) =>{
        try{
            await AsyncStorage.setItem("credentails", JSON.stringify({email : email, password : password}));
            let credential = await firebase.auth().createUserWithEmailAndPassword(email,password);
            if (onSucess) {
                onSucess(email,name);
            }
        }catch(error){
            try {
                await AsyncStorage.removeItem('credentails');
              } catch(e) {
                console.log("could not remove bad cred");
              }
              Toast.show({
                type: 'error',
                text1: 'Bad Email/Password!',
              });
            console.log(error);
            if (onFail) onFail();
            return "bad-email";
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


import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const doSignIn = (onSucess?:Function, onFail?:Function) =>{
    return async(email:string, password:string) =>{
        try{
            let credential = await firebase.auth().signInWithEmailAndPassword(email,password);
            if (onSucess) onSucess(credential);
        }catch(error){
            console.log(error);
            if (onFail) onFail();
        }  
    }
}

const doSignUp = (onSucess?:Function, onFail?:Function) =>{
    return async(email:string, password:string) =>{
        try{
            let credential = await firebase.auth().createUserWithEmailAndPassword(email,password);
            if (onSucess) onSucess(credential);
        }catch(error){
            console.log(error);
            if (onFail) onFail();
        }  
    }
}

const doSignOut = (onSucess?:Function, onFail?:Function) =>{
    return async(email:string, password:string) =>{
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


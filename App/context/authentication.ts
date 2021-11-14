import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firebaseConfig from '../firebaseconfig';
class AuthManager{
    private user: object|null;
    private isAuthenticated: boolean;
    private Auth: any;
    constructor(Auth?:any){
        
        if (Auth)
            this.Auth=Auth;
        else{
            let app = firebase.initializeApp(firebaseConfig).then((app)=>{
                
                this.Auth = auth(app);
            });    
        }
        this.isAuthenticated=false;
        this.user=null;
    }
    private authenticate = (user:object) => {
        this.user=user;
        this.isAuthenticated=true;
    }
    private deAuthenticate = () => {
        this.user=null;
        this.isAuthenticated=false;
    }
    doSignIn = async(username:string, password:string) => {
        try{
            await auth().createUserWithEmailAndPassword(username,password);
            this.authenticate({});
        }catch(error){
            this.deAuthenticate();
        }
    }
    doSignOut = async() => {
        await this.Auth.signOut();
        this.deAuthenticate();
    }
    doChangePassword = async(username: string, oldPassword:string, newPassword:string) => {
        try{
            //TODO
        }catch(error){

        }
    }
    doSignUp = async(username:string, password:string) => {
        try{
            await this.Auth.createUserWithEmailAndPassword(username,password);
        }catch(error){

        }
    }
    getAuthenticationState = ():{isAuthenticated:boolean, user:object|null} =>{
        return {
            isAuthenticated: this.isAuthenticated,
            user: this.user
        }
    }
}
export {AuthManager}
export default React.createContext({isAuth: false, authManager:new AuthManager()});
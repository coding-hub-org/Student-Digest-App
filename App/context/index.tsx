import React from 'react';

class AuthManager{
    private user: object|null;
    private isAuthenticated: boolean;
    constructor(user?:object){
        if (user){
            this.isAuthenticated=true;
            this.user=user;
        }else{
            this.isAuthenticated=false;
            this.user=null;
        }
    }
    private authenticate = (user:object) => {
        this.user=user;
        this.isAuthenticated=true;
    }
    private deAuthenticate = () => {
        this.user=null;
        this.isAuthenticated=false;
    }
    doSignIn = (username:string, password:string) => {
        try{
            //TODO
            this.authenticate({});
        }catch(error){
            this.deAuthenticate();
        }
    }
    doSignOut = () => {
        //TODO
        this.deAuthenticate();
    }
    doChangePassword = (username: string, oldPassword:string, newPassword:string) => {
        try{
            //TODO
        }catch(error){

        }
    }
    doSignUp = () => {
        try{
            
        }catch(error){
            
        }
    }
}
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  update,
  push,
  child,
  orderByValue,
  orderByChild,
} from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { API_KEY, MSI, APP_ID } from "@env";
import firebase from "firebase/compat/app";
import { async } from "@firebase/util";
import Toast from 'react-native-toast-message';

// TODO: Replace with your app's Firebase project configuration

const axios = require('axios');

const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: "student-digest-app.firebaseapp.com",
  databaseURL: "https://student-digest-app-default-rtdb.firebaseio.com",
  projectId: "student-digest-app",
  storageBucket: "student-digest-app.appspot.com",
  messagingSenderId: `${MSI}`,
  appId: `${APP_ID}`,
  measurementId: "${config.measurementId}",
};

var app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

// Get a reference to the database service
const db = getDatabase(app);
//Auth
const auth = getAuth(app);
const user = auth.currentUser;
var localId = "9999";
if (user !== null) {
  localId = user.uid;
}

const Chatscreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  const fecthMessages = () => {
    const messages = ref(db, "/messages");
    onValue(messages, (snapshot) => {
      let temp = [];
      const data = snapshot.val();
      let c = 0;
      for (var i in data) {
        temp.push({
          _id: c,
          text: data[i]["text"],
          createdAt: data[i]["createdAt"],
          user: {
            _id: data[i]["user"]["_id"],
            name: data[i]["user"]["name"],
            avatar: data[i]["user"]["avatar"],
          },
        });
        c += 1;
      }
      temp.sort(
        (a, b) => Date.parse(b["createdAt"]) - Date.parse(a["createdAt"])
      );
      setMessages(temp);
    });
  };

  const pushMessage = async (message, createdAt, uid, avatar, name) => {
    const postInfo = {
      text: message,
      createdAt: createdAt,
      user: {
        _id: uid,
        name: name,
        avatar: avatar,
      },
    };

    const newPostKey = push(child(ref(db), "messages")).key;

    const postObject = {};
    postObject["/messages/" + newPostKey] = postInfo;
    return update(ref(db), postObject);
  };

  const fetchCred = async () => {
    try {
      const cred = await AsyncStorage.getItem("credentails");
      if (cred != null) {
        return JSON.parse(cred);
      }
    } catch (err) {
      console.log("no credentails saved");
      return null;
    }
  };
  //"https://www.purgomalum.com/service/containsprofanity?text= some value"
  const hasProfanity = async (message) => {
    try {
  //add: ["bada", "profanityword"]
     const response = await axios.get("https://www.purgomalum.com/service/containsprofanity?text=" + message);
      console.log(response.data);
  } 
    catch (err) {
    // Handle Error Here.
      console.error(err);
  }

//If all else fails return something. HINT: return null
  return true;
}

  useEffect(() => {
    fetchCred().then((val) => {
      if (val !== null) {
        signInWithEmailAndPassword(auth, val["email"], val["password"])
          .then((userCredential) => {
            // Signed in
            localId = userCredential.user.uid;
            fecthMessages();
            // ...
          })
          .catch((error) => {
            console.log("User does not exist");
          });
      } else {
        console.log("User does not exist");
      }
    });
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const text = messages[0]["text"];

    hasProfanity(text).then((val) => {
      // text = "";
      console.log(val);
       if (val) {
         console.log("eh");
         /*Toast.show({
           type: 'error',
           text1: 'Message contains profanity, cannot send this message!',
         });*/
         return;
       }else{
        if (auth.currentUser !== null) {
          pushMessage(
            text,
            new Date(),
            auth.currentUser.uid,
            auth.currentUser.photoURL,
            auth.currentUser.displayName
          ).then((val) => console.log(String(val)));
        }
       }
      }
    );

    

    
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: localId,
      }}
      renderUsernameOnMessage={true}
    />
  );
};
export default Chatscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAF9F6",
  },
});

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1UFuv_3Wovsm6xRI0c8n0yOJCxrx3odg",
    authDomain: "student-digest-app.firebaseapp.com",
    databaseURL: "https://student-digest-app-default-rtdb.firebaseio.com",
    projectId: "student-digest-app",
    storageBucket: "student-digest-app.appspot.com",
    messagingSenderId: "94057697013",
    appId: "1:94057697013:web:48b4f04b2ad39e4e623fbc",
    measurementId: "G-S76LZ12738"
  };


const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
  
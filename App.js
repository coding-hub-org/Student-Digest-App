import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./App/components/tabs";
import { SignupScreen } from "./App/screens/signupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "./App/screens/settingScreen";
import { SeeMoreScreen } from "./App/screens/seeMoreScreen";
import { SeeMoreProfile } from "./Screens/seeMoreProfile";
import { LoginScreen } from "./App/screens/loginScreen";
import { AboutScreen } from "./App/screens/aboutScreen";
import { FrequentlyAskedQuestions } from "./App/screens/askedQuestion";
import AuthenticationContext, {
  doSignIn,
  doSignOut,
  doSignUp,
} from "./context/authentication";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { API_KEY, MSI, APP_ID } from "@env";

// Initialize Firebase
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

//firebase.initializeApp(firebaseConfig);

import Toast from "react-native-toast-message";

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="TABS"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="SeeMore" component={SeeMoreScreen} />
        <Stack.Screen name="Profiles" component={SeeMoreProfile} />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Frequently Asked Questions" component={FrequentlyAskedQuestions} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default function AuthenticatingApp() {
  const updateUser = (email, name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
        photoURL:
          "https://www.plattsburgh.edu/files/307/images/new-burghy-p-logo.png",
      })
      .then(() => {
        console.log("Users cred made");
      })
      .catch((error) => {
        console.log("error while setting the user cred");
      });
  };

  const [isAuthed, setAuthed] = useState(false);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user is logged");
      setAuthed(true);
    }
  });
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthed: isAuthed,
        signIn: doSignIn(() => {
          setAuthed(true);
        }),
        signUp: doSignUp(updateUser),
        signOut: doSignOut(() => {
          setAuthed(false);
        }),
      }}
    >
      <App />
    </AuthenticationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

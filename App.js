import { StatusBar } from 'expo-status-bar';
import React from "react"
import { StyleSheet, Text, View, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './App/components/tabs';
import { SignupScreen } from './App/screens/signupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from './App/screens/settingScreen';
import { SeeMoreScreen } from './App/screens/seeMoreScreen';
import { SeeMoreProfile } from './Screens/seeMoreProfile';
import {API_KEY,MSI,APP_ID} from "@env";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const firebaseConfig = {
  apiKey: '${API_KEY}',
  authDomain: "student-digest-app.firebaseapp.com",
  databaseURL: "https://student-digest-app-default-rtdb.firebaseio.com",
  projectId: "student-digest-app",
  storageBucket: "student-digest-app.appspot.com",
  messagingSenderId: '${MSI}',
  appId: '${APP_ID}',
  measurementId: "G-S76LZ12738"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "TABS" component= {Tabs} options={{headerShown: false}}/>
        <Stack.Screen name = "Settings" component={SettingsScreen}/>
        <Stack.Screen name = "SeeMore" component={SeeMoreScreen}/>
        <Stack.Screen name = "Profiles" component ={SeeMoreProfile}/>
        <Stack.Screen name = "Login" component = {SignupScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

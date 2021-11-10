import { StatusBar } from 'expo-status-bar';
import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { TextCom } from './App/components/textComponent';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './App/components/tabs';
import { SignupScreen } from './App/screens/signupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from './App/screens/settingScreen';
import { SeeMoreScreen } from './App/screens/seeMoreScreen';
import { SeeMoreProfile } from './Screens/seeMoreProfile';

const Stack = createNativeStackNavigator();

const firstLogin = <SignupScreen/>;
const temp = true;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "TABS" component= {Tabs} options={{headerShown: false}}/>
        <Stack.Screen name = "Settings" component={SettingsScreen}/>
        <Stack.Screen name = "SeeMore" component={SeeMoreScreen}/>
        <Stack.Screen name = "Profiles" component ={SeeMoreProfile}/>
        <Stack.Screen name = "Login" component = {SignupScreen}/>
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

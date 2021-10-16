import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextCom } from './App/components/textComponent';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './App/components/tabs';
import { SignupScreen } from './App/screens/signupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from './App/screens/settingScreen';

const Stack = createNativeStackNavigator();

const firstLogin = <SignupScreen/>;
const temp = false;

export default function App() {
  return temp ? firstLogin : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TABS">
        <Stack.Screen name = "TABS" component= {Tabs} options={{headerShown: false}}/>
        <Stack.Screen name = "Settings" component={SettingsScreen}/>
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

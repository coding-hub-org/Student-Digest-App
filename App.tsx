import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextCom } from './App/components/textComponent';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './App/components/tabs';
import { SignupScreen } from './App/screens/signupScreen';

const firstLogin = <SignupScreen/>;
const temp = false;

export default function App() {
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>

    
=======
    <View style={styles.container}>
      <TextCom/>
      <Text>Hello Wjef4455jdfbksb</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> upstream/master
=======
  return temp ? firstLogin : (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
>>>>>>> Upstream/master
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

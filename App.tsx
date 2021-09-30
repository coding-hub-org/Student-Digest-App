import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextCom } from './App/components/textComponent';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './App/components/tabs';



export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
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

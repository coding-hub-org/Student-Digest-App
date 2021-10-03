import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { TextCom } from './App/components/textComponent';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './App/components/tabs';
import { SignupScreen } from './App/screens/signupScreen';



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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Chatscreen from '../../Screens/ChatScreen';
import HomeScreen from '../../Screens/HomeScreen';
import SettingScreen from '../../Screens/SettingScreen';
const Tab = createBottomTabNavigator();

        
const Tabs = (props) => {
  return(
    <Tab.Navigator screenOptions={ {tabBarIcon: ()=>null} }>
        <Tab.Screen name = "Home" component = {HomeScreen}
         />
        <Tab.Screen name = "Setting" component = {SettingScreen} />
        <Tab.Screen name = "Chat" component = {Chatscreen}/>
        

    </Tab.Navigator> 
  );


}

export default Tabs;
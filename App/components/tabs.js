import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Chatscreen from '../../Screens/ChatScreen';
import HomeScreen from '../../Screens/HomeScreen';
import SettingScreen from '../../Screens/SettingScreen';
import { Icon } from 'react-native-elements'
import { Ionicons} from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

        
const Tabs = (props) => {
  return(
    <Tab.Navigator screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'home-sharp';
      } 
      else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle-outline' : 'person-circle';
      }
      else if(route.name == 'Chat'){
        iconName = focused ? 'chatbox-ellipses' : 'chatbox';
      }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray', })} initialRouteName = "Home">
      <Tab.Screen name = "Profile" component = {SettingScreen} />
      <Tab.Screen name = "Home" component = {HomeScreen}/>
      <Tab.Screen name = "Chat" component = {Chatscreen}/>
    </Tab.Navigator> 
  );


}

export default Tabs;
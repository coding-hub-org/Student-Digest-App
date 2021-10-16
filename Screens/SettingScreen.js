import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SettingsIcon} from "../App/components/settingsIcon";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Settingscreen =({navigation}) => {
    return (
    <View style = {styles.container}>
        <SettingsIcon navigation={navigation}/>
    </View>
    );
    };   
export default Settingscreen;


const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'flex-end',
          //justifyContent: '',
          backgroundColor: '#8fcbbc',

      },

    });
      

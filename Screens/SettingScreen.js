import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SettingsIcon} from "../App/components/settingsIcon";


const Settingscreen =({navigation}) => {
    return (
    <View style = {styles.container}>
        <SettingsIcon/>          
        <Text> Setting Scren</Text>
        <Button 
          title = "Click This"
          onPress ={() => alert('Button Clicked!')}
          />
    </View>
    );
    };   
export default Settingscreen;


const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8fcbbc',

      },

    });
      

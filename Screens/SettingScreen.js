import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, Title,Caption, TouchableRipple } from 'react-native-paper';
import {SettingsIcon} from "../App/components/settingsIcon";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import avatarPicture from '../assets/avatar.png';



const Settingscreen =({navigation}) => {
    let imageUrl='';
    return (
     <SafeAreaView style = {styles.container}>
       <View style={styles.userInfoSection}>   
        <View style = {{flexDirection: 'row', marginTop: 15}}>
           
        <TouchableOpacity onPress={() => navigation.navigate("Profiles")} navigation={navigation}>
             <Avatar.Image 
              navigation = {navigation} 
              source={imageUrl?{'uri':imageUrl}:avatarPicture}
              size = {80}/>
        </TouchableOpacity>
              <View style={{marginLeft: 20}}>
                  <Title style={ [styles.title, { 
                      marginTop: 15,
                      marginBottom: 5,
                  }]} >Eric monestime </Title>
                  <Caption style = {styles.Caption}>@Blasian </Caption>
              </View>
            </View>
        <SettingsIcon style={styles.button} navigation={navigation}/>
      </View>
      <View style ={styles.userInfoSection}>
          <View style = {styles}>
              <Text> Hello worldss </Text>
     </View> 
     </View>
    </SafeAreaView>
    );
    };   
export default Settingscreen;


const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          //justifyContent: '',
          backgroundColor: '#8fcbbc',
          
      },
      userInfoSection: {
          paddingHorizontal:30,
          marginBottom: 25,
          display:'flex',
          flexDirection:'row'
      },
      button:{
          alignItems:'flex-end'
      }
    });
      

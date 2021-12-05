import React from "react";
import {Text,View,Button,Alert,TouchableOpacity,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const SettingsIcon = ({navigation}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.button}>
            <Ionicons name="settings-outline" size={30} color="grey" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10
    },
    buttonText: {
      color: "grey"
    }
  });

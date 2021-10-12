import React from "react";
import {Text,View,Button,Alert,TouchableOpacity,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export const SettingsIcon = () => {
    return(
        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={styles.button}>
            <Ionicons name="settings-outline" size={30} color="black" />
            <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({

    button: {
      margin: 12,
      backgroundColor:'#8fcbbc',
      height: 20,
      padding: 20,
      borderRadius: 10,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },

    buttonText: {
      color: "black"
    }
  });

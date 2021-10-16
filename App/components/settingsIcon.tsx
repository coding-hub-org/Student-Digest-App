import React from "react";
import {Text,View,Button,Alert,TouchableOpacity,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export const SettingsIcon = () => {
    return(
        <TouchableOpacity onPress={() => Alert.alert('Settings was pressed!')} style={styles.button}>
            <Ionicons name="settings-outline" size={30} color="black" />
            <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({

    button: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText: {
      color: "black"
    }
  });

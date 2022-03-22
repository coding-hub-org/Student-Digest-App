import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { MyButton, MyButton1, MyButton2 } from "../components/dummyButton";

export const SettingsScreen = ({ navigation }) => {
    //add your buttons in the view
    return (
        <View>
            <MyButton navigation={navigation} />
            <MyButton1 />
            <MyButton2 navigation={navigation} />

        </View>

    );
}

const styles = StyleSheet.create({
    toggleswitch: {
        padding: 0

    }
})
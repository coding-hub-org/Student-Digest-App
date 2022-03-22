
import React, { useContext } from "react";
import { Text, View, Button, Alert, Switch, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import authenticationContext from "../../context/authentication";
//export default () => {
//s  const colorScheme = useColorScheme();
//return(
//    <NavigationContainer theme={colorScheme === 'dark ? DarkTheme : DefaultTheme'}>
//      
//</NavigationContainer>
//);


//onst { signOut, isAuthed } = useContext(authenticationContext)

export const MyButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.text}
            onPress={() => navigation.navigate("About")}
        >
            <Text>About</Text>
        </TouchableOpacity>
    );
}

export const MyButton1 = () => {
    return (
        <Switch
            containerStyle={{ marginTop: 16 }}
            trackColor={{ false: "#fff", true: "#fff" }}
            thumbColor={true ? "#808080" : "#808080"}
            ios_backgroundColor="#fff"
            onValueChange={() => { }}
            value={true}


        />

    );
}

export const MyButton2 = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.text}
            onPress={() => navigation.navigate("SignUp")}
        >
            <Text>Sign Out</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    text: {
        padding: 16,
        backgroundColor: "#fff"
    },
    switchtoggle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 100
    }
})
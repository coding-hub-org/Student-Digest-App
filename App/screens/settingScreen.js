import React from "react";
import { useContext } from "react";
import { Text, View, Button, Alert, Switch, TouchableOpacity, StyleSheet, useColorScheme, } from "react-native";
import AuthenticationContext from "../../context/authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignupScreen } from "../screens/signupScreen";
import { StackActions } from "@react-navigation/native";
import { Restart } from "fiction-expo-restart";

export const SettingsScreen = ({ navigation }) => {
  //add your buttons in the view
  return (
    <View>
      <AboutButton navigation={navigation} />
      <ModeButton />
      <SignOutButton navigation={navigation} />
      <FrequentlyAskedButton navigation={navigation} />
    </View>
  );
};



export const AboutButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.text}
      onPress={() => navigation.navigate("About")}
    >
      <Text>About</Text>
    </TouchableOpacity>
  );
};

export const ModeButton = () => {

  return (
    <View style={styles.text1}
    >
      <Text style={styles.text}>Light and Dark mode                                             </Text>
      <Switch
        containerStyle={{ marginTop: 16 }}
        trackColor={{ false: "black", true: "black" }}
        thumbColor={true ? "red" : "#808080"}
        ios_backgroundColor="#fff"
        onValueChange={() => { }}
        value={true}
      />
    </View>
  );
};

export const SignOutButton = ({ navigation }) => {
  const { signOut } = useContext(AuthenticationContext);
  return (
    <TouchableOpacity
      style={styles.text}
      onPress={() => {
        try {
          AsyncStorage.removeItem("credentails").then(() => {
            signOut().then(() => {
              Restart();
            });
          });
        } catch (e) {
          //add a toast here
        }
      }}
    >
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
};

export const FrequentlyAskedButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.text}
      onPress={() => navigation.navigate("Frequently Asked Questions")}
    >
      <Text>Frequently Asked Questions</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
    backgroundColor: "#fff",
  },
  switchtoggle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
  styleswitch: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  text1: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-end',
    backgroundColor: '#fff'
  }
});

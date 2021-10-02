import React from "react";
import { Text,View,SafeAreaView, StyleSheet,TextInput,Dimensions,Button,TouchableOpacity} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SignupScreen = () =>{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [name, onChangeName] = React.useState("");
    return(
        <SafeAreaView style = {styles.safearea}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="SUNY Plattsburgh Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Sign up!</Text>
          </TouchableOpacity>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    safearea: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
      height: 40,
      width: windowWidth - 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20
      
    },
    
    button: {
      margin: 12,
      backgroundColor: "#2196F3",
      height: 20,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText: {
      color: "white"
    }
  });
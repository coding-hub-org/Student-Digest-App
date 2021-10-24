import React from "react";
import { Text,View,SafeAreaView, StyleSheet,TextInput,Dimensions,Button,TouchableOpacity, Image, } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let hidePassword = true;// true hides the password, false shows it

export const SignupScreen = () =>{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [name, onChangeName] = React.useState("");
    return(
        <SafeAreaView style = {styles.safearea}>
          <Image source={require('../../assets/logo.png')} style = {styles.imageStyle} />
          <View style = {styles.inputView}>
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
            secureTextEntry={hidePassword}
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />

          {/*eye button*/}
          <TouchableOpacity onPress={() => {
            return (<Ionicons name="eye" size={24} color="black" />)
          }} style={styles.eye}>
            <Ionicons name="eye-off" size={25} color="black" />
          </TouchableOpacity>
          </View>

          {/*sign up button*/}
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    safearea: {
      flex: 1,
      alignItems: 'center',
    },

    input: {
      height: 50,
      width: windowWidth - 50,
      margin: 10,
      borderBottomWidth: StyleSheet.hairlineWidth
      
    },

    eye:{
      
    },
    
    button: {
      margin: 12,
      backgroundColor: "#BC0012",
      height: 20,
      width: "95%",
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "auto",
    },

    buttonText: {
      color: "white",
      fontWeight: "bold",
    },

    imageStyle: {
      display: "flex",
      alignItems: "center",

      width: "100%",
      resizeMode: "contain", 
      justifyContent: "center",
      marginBottom: "auto",
      margin: 40,
    },

    inputView: {
      marginBottom: 150,
    }
  });
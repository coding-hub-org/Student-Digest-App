import React, {useContext, useState, useEffect} from "react";
import { Text,View,SafeAreaView, StyleSheet,TextInput,Dimensions,Button,TouchableOpacity, Image, KeyboardAvoidingView,Platform, ActivityIndicator} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthContext from '../context/authentication';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let hidePassword = true;// true hides the password, false shows it

export const SignupScreen = ({navigation}) =>{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [loading,setLoading] = useState(false);
    const {isAuth, authManager} = useContext(AuthContext);
    const handleLogin = ()=>{
      if (!loading)
      {
        setLoading(true);
        authManager.doSignIn(email,password);
        setLoading(false);
      }
    }
    useEffect(()=>{
      if (isAuth)
      navigation.navigate("TABS");
    },[isAuth]);
    return(
      <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 10}}
            scrollEnabled={true}
          >
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
          <TouchableOpacity onPress={()=>{setHidePassword(prev=>!prev)}} style={styles.eye}>
            {hidePassword?(<Ionicons name="eye-off" size={25} color="black" />):(<Ionicons name="eye" size={25} color="black" />)}
          </TouchableOpacity>
          </View>

          {/*sign up button*/}
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
        </KeyboardAwareScrollView>
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
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },

  eye:{
    
  },
  
  button: {
    margin: 12,
    backgroundColor: "#BC0012",
    height: 40,
    width: "95%",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "auto",
  },

  buttonText: {
    color: "#FFFFFF",
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
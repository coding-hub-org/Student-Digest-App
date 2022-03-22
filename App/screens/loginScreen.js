import React, {useContext, useEffect} from "react";
import { Text,View,SafeAreaView, StyleSheet,TextInput,Dimensions,Button,TouchableOpacity, Image, KeyboardAvoidingView,Platform, ActivityIndicator} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthenticationContext from '../../context/authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let hidePassword = true;// true hides the password, false shows it

export const LoginScreen = ({navigation}) =>{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [eye,setEye] = React.useState(<Ionicons name="eye-off" size={25} color="black" />)
    const {signIn, isAuthed} = useContext(AuthenticationContext);

    const fetchCred = async () =>{
      try{
        const cred = await AsyncStorage.getItem("credentails");
        if(cred != null){
          return JSON.parse(cred);
        }
      }catch(err){
        console.log("no credentails saved");
        return null;
      }

    }

    useEffect(()=>{
      fetchCred().then(val => {
        if(val != null){
          onChangeEmail(val["email"]);
          onChangePassword(val["password"]);
          try{
            signIn(val["email"],val["password"])
          }catch(err){
            console.log(console.error);
          }
        }
      });
      if (isAuthed)
        navigation.navigate("TABS");
    },[isAuthed,navigation])

    const handleLogin = () =>{
      if(email == "" || password == ""){
        Toast.show({
          type: 'error',
          text1: 'Email or password values are empty! ❌',
        });
        return;
      }
      if(password.length < 6){
        Toast.show({
          type: 'error',
          text1: 'Password must be greater than 6 characters! ❌',
        });
        return;
      }
      try{
          signIn(email,password).then((v) => {
            if(v == null){
              navigation.navigate("TABS");
            }
          } );
      }catch(error){
        Toast.show({
          type: 'error',
          text1: 'Bad Email/Password! ❌',
        });
        return;
      }
    }

    const changeEye = () => {
      if(hidePassword != true){
        setEye(<Ionicons name="eye-off" size={25} color="black" />)
        hidePassword = true;
      }
      else{
        setEye(<Ionicons name="eye" size={25} color="black" />)
        hidePassword = false;
      }
    }
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
          <TouchableOpacity onPress={changeEye} style={styles.eye}>
            {eye}
          </TouchableOpacity>
          </View>

          {/*sign up button*/}
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
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
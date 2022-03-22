import React, { useState, useEffect,useRef } from 'react';
import { View, Text, Button, StyleSheet,ScrollView, ActivityIndicator, TouchableOpacity,RefreshControl,Dimensions} from 'react-native';
import {MyButton} from '../App/components/dummyButton';
import { Cards } from '../App/components/card.component';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import {API_KEY,MSI,APP_ID} from "@env";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: "student-digest-app.firebaseapp.com",
  databaseURL: "https://student-digest-app-default-rtdb.firebaseio.com",
  projectId: "student-digest-app",
  storageBucket: "student-digest-app.appspot.com",
  messagingSenderId: `${MSI}`,
  appId: `${APP_ID}`,
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }
//firebase.initializeApp(firebaseConfig);

const db = getFirestore();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Homescreen = ({navigation}) => {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();


  const [itemsArray, setItemsArray] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const fecthData = async () => {
    let temp = [];
    try{
      const querySnapshot = await getDocs(collection(db, "digest"));
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      setItemsArray(temp);
      setLoading(false);
    }catch(e){
      console.log(e);
      temp.push({
        title: "No digest to pull",
        imageOverlay: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "We are having trouble getting the digest. Enjoy this photo of a dog. Try refreshing the Home screen by swiping/pulling down.",
      });
      setItemsArray(temp);
      setLoading(false);
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setItemsArray([]);
    setRefreshing(true);
    fecthData().then(() => setRefreshing(false));
  }, []);

  const CheckScheduledPush = async () =>{
    try {
      const value = await AsyncStorage.getItem('PUSHED_NOTIFICATION');
      if(value !== null) {
        return true;
      }
    } catch(e) {
      return false;
    }
  }
  React.useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
    fecthData();

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    CheckScheduledPush().then((val) =>{
      if(!val){
        schedulePushNotification();
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [navigation]);

  const makeCards = () => {
    return itemsArray.map((digest, i) => {
      if(digest["title"] == null || digest["description"] == null || digest["imageOverlay"] == null){
        return (<Text key={i}></Text>)
      }
      try{
        return(
          <Cards
            navigation = {navigation}
            name = {digest["title"]}
            des = {digest["description"]}
            img = {digest["imageOverlay"]}
            time = {digest["timeStamp"]}
            key = {i}
          />
        );
      }catch(err){
        console.log("Card could not be filled")
      }
    });
  }


  return(
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <View style = {styles.container}>
        {isLoading ? <ActivityIndicator size="large" color="#de706f" /> : itemsArray.length < 1 ? <Text style={styles.emptyDigest}>It's lonely in here...Pull down to refresh</Text> : makeCards()}
      </View>
    </ScrollView>
  );
};   
export default Homescreen;

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'New Student Digest are in!',
      data: { data: 'goes here' },
    },
    trigger: {
      hour: 9,
      minute: 30,
      repeats: true
     },
  });
  try {
    await AsyncStorage.setItem('PUSHED_NOTIFICATION', "true")
  } catch (e) {
    // saving error
  }
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}


const styles = StyleSheet.create({
      container: {
        margin: 10,
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',

      },

      emptyDigest: {
        textAlign: "center",
        textAlignVertical: "center",
        height: windowHeight - 125
      }

    });
      

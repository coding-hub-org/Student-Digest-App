import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl
} from "react-native";
import { Avatar, Title, Caption, TouchableRipple, Card, Paragraph } from "react-native-paper";
import { SettingsIcon } from "../App/components/settingsIcon";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import avatarPicture from "../assets/avatar.png";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { AuthErrorCodes, getAuth } from "firebase/auth";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Settingscreen = ({ navigation }) => {

  const isFocused = useIsFocused();
  const [localStorage, SetLocalStorage] = React.useState([]);

  const [username, setUsername] = React.useState("");
  const [icon, setIcon] = React.useState("https://www.plattsburgh.edu/files/307/images/new-burghy-p-logo.png")

  const [cardCounter, setCardCounter] = React.useState(0);



  const refresh = () => {
    fetchFromLocalStorage().then((val) => {
      SetLocalStorage(val);
    });
  }

  const removeSavedDigest = async (digest) => {
    try {
      await AsyncStorage.removeItem(digest)
    } catch(e) {
      // remove error
    }
  }

  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
    return keys;
  }

  const getAllValues = async (keys) => {
    let values
    try {
      values = await AsyncStorage.multiGet(keys)
    } catch(e) {
      // read error
    }
    return values;
  }

  const fetchFromLocalStorage = async () => {
    const keys = await getAllKeys();
    const values = await getAllValues(keys);
    return values;
  }

  const makeCards = () => {
    if(localStorage.length - 2 < 1){
      return (
        <View style={styles.emptyDigestView}>
          <Text style={styles.emptyDigest}>Looks like you haven't saved anything.</Text>
          <Text style={styles.emptyDigest}>Long press on a digest to save it!</Text>
        </View>
      )
    }
    return localStorage.map((digest, i) => {
      const parsed = JSON.parse(digest[1]);
      if(parsed["t"] == null || parsed["d"] == null || parsed["pic"] == null){
        return(<Text key={i}></Text>)
      }
      return(
        <Card style = {styles.cardStyle} elevation = {2} onPress = {() => {
          navigation.navigate("SeeMore", {t: parsed["t"], d: parsed["d"], pic: parsed["pic"]});
          }} key = {i} 
          onLongPress = {() => {
            removeSavedDigest(parsed["t"]);
            refresh();
            Toast.show({
              type: 'success',
              text1: 'Digest Deleted! 🗑️',
              text2: parsed["t"]
            });
          }}
        >
          <Card.Cover source={{ uri: parsed["pic"] }} style={styles.test}/>
          <Card.Content>
              <Title>{parsed["t"].slice(0,50)}...</Title>
              <Paragraph>{Date(parsed["timeStamp"]).toString().slice(0,15)}</Paragraph>
          </Card.Content>
      </Card>
      );
    });
  }

  const setUserCred = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user !== null){
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      setUsername(displayName);
      setIcon(photoURL);
    }
  }


  React.useEffect(() => {
    fetchFromLocalStorage().then((val) => {
      SetLocalStorage(val);
    });
    setUserCred();
    return () => {};
  }, [isFocused]);


  let imageUrl = "";
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.Settingview}>
        <SettingsIcon style={styles.button} navigation={navigation} size={10} />
      </View>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profiles")}
            navigation={navigation}
          >
            <View style={styles.profileCircle}>
              <Avatar.Image
                navigation={navigation}
                source={{ uri: icon }}
                size={145}
                marginLeft={0}
              />
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 0, justifyContent: 'center', alignItems: 'center', }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 30,
                },
              ]}
            >
              {username}
            </Title>
            <View>
              <Caption> @ Plattsburgh </Caption>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
      </View>
      <Title>Saved Digest</Title>
      <ScrollView horizontal = {true} style = {styles.scrollViewStyle} contentContainerStyle={styles.ctcs}>
        {/* <Text></Text> */}
        {makeCards()}
      </ScrollView>
    </SafeAreaView>
    </ScrollView>
  );
};
export default Settingscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: - (windowHeight/30),
    //paddingBottom: - (windowHeight/30),
    backgroundColor: "#FAF9F6",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    alignItems: "flex-end",
  },
  profileCircle: {
    //marginLeft: windowWidth / 15,
  },
  Settingview: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
  },
  cardStyle: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    width: 300,
    margin: 10,
    height: 'auto',
},
  test: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: windowHeight / 7.4,
  },
  scrollViewStyle: {
    //marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    height: 'auto',
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ctcs: {
    justifyContent: "center",
    alignItems: "flex-start",

  },
  viewtester: {
    marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  emptyDigest:{
    color: "grey",
  },
  emptyDigestView: {
    //backgroundColor: "blue",
    // alignItems: "center",
    // marginLeft: windowWidth / 4,
    // marginTop: "auto",
    // marginBottom: "auto",
    //marginLeft: windowWidth / 5,
    //marginTop: windowWidth / 4,
    //width: "100%",
    alignSelf: "center",
    marginHorizontal: windowWidth / 5
    //alignItems: "center"
    //padding: 10

  }
});

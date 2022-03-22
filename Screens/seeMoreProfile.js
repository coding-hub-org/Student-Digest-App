import React, { Component, useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
  AppRegistry,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Animated,
  ActivityIndicator
} from "react-native";
import { Overlay } from "react-native-elements";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";

const storage = getStorage();

const listRef = ref(storage, 'profilePhotos/');

const windowWidth = Dimensions.get('window').width;
const windowHieght = Dimensions.get('window').height;

export const SeeMoreProfile = ({ navigation }) => {
  const [images,setImages] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);


  const fecthProfilePhotos = async () => {
    try{
      let itemRefList = await listAll(listRef);
      let temp = await Promise.all(itemRefList.items.map(async (itemRef)=>await getDownloadURL(itemRef)));
      setImages(temp);
    }catch(error){
      setImages([]);
      console.log(error);
    }
    
  }

  
  const [visible, setIsVisible] = useState(false);
  const [imageUri, setImageUri] = useState("");

  const toggleOverlay = (link) => {
    setImageUri(link);
    setIsVisible(!visible);
  };

  const windowWidth = Dimensions.get("window").width;
  var IMAGES_PER_ROW = 2;

  const calculatedSize = () => {
    var size = windowWidth / IMAGES_PER_ROW;
    return { width: size, height: size };
  };
  const renderRow = (images) => {
    return images.map((uri, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {
            toggleOverlay(String(uri));
            fadeIn();
          }}
        >
          <Image
            key={i}
            style={[styles.item, calculatedSize()]}
            source={{ uri: uri }}
          />
        </TouchableOpacity>
      );
    });
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const updateUser = (url) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      photoURL: url,
    }).then(() => {
      // Profile updated!
      navigation.goBack();
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  React.useEffect(() => {
    fecthProfilePhotos().then(() => {setLoading(false);});
  }, []);

  return (
    <ScrollView>
      <View style={styles.style_view}>
        {images &&  isLoading ? <ActivityIndicator size="large" color="#de706f" /> : renderRow(images)}
          <Overlay isVisible={visible} onBackdropPress={() => toggleOverlay("")} backdropStyle={styles.overlayWhole}>
            <Animated.View style={{opacity:fadeAnim}}>
              <Text style={styles.overlayText}>Change profile picture to this photo?</Text>
              <Image source={{uri: imageUri}} style ={styles.overlayImage}/>
              <View style={styles.overlayViewStyle}>
                <TouchableOpacity style={styles.overlayButton} onPress={() => {
                  updateUser(imageUri);
                  toggleOverlay("");
                }}><Text style={{fontWeight:"bold"}}>Yes</Text></TouchableOpacity>
                <TouchableOpacity style={styles.overlayButton} onPress={() => {toggleOverlay("");}}><Text style={{fontWeight:"bold"}}>No</Text></TouchableOpacity>
              </View>
            </Animated.View>
          </Overlay>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
  },
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  headline_text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "black",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  style_view: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  overlayImage: {
    height: windowHieght / 2.5,
    width: windowWidth - 50,
    marginTop: 10,
    borderRadius: 10,
  },
  overlayText: {
    color: "black",
    fontWeight: "bold",
  },
  overlayViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  overlayButton: {
    marginTop: 10,
    marginRight: 25,
    marginLeft: 15,
  },
  overlayWhole: {},
});

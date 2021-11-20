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
} from "react-native";
import { Overlay } from "react-native-elements";
import { overlay } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHieght = Dimensions.get("window").height;

export const SeeMoreProfile = ({ navigation }) => {
  const images = [
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  ];

  const createTwoButtonAlert = () =>
    Alert.alert("Change my profile photo to this photo?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
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
  const renderImagesInGroupsOf = (count) => {
    return _.chunk(IMAGE_URLS, IMAGES_PER_ROW).map((imagesForRow, i) => {
      return (
        <View style={styles.row} key={i}>
          {this.renderRow(imagesForRow)}
        </View>
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

  return (
    <ScrollView>
      <View style={styles.style_view}>
        {renderRow(images)}
        <Overlay
          isVisible={visible}
          onBackdropPress={() => toggleOverlay("")}
          backdropStyle={styles.overlayWhole}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.overlayText}>
              Change profile picture to this photo?
            </Text>
            <Image source={{ uri: imageUri }} style={styles.overlayImage} />
            <View style={styles.overlayViewStyle}>
              <TouchableOpacity style={styles.overlayButton}>
                <Text style={{ fontWeight: "bold" }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.overlayButton}
                onPress={() => toggleOverlay("")}
              >
                <Text style={{ fontWeight: "bold" }}>No</Text>
              </TouchableOpacity>
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

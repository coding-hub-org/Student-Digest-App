import React, { Component, useState } from "react";
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
} from "react-native";

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
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  ];
  const [visible, setIsVisible] = useState(true);

  const windowWidth = Dimensions.get("window").width;
  var IMAGES_PER_ROW = 2;

  const calculatedSize = () => {
    var size = windowWidth / IMAGES_PER_ROW;
    return { width: size, height: size };
  };
  const renderRow = (images) => {
    return images.map((uri, i) => {
      return (
        <TouchableOpacity>
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
  return (
    <ScrollView>
      <View style={styles.style_view}>{renderRow(images)}</View>
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
});

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Card, Paragraph, Title } from "react-native-paper";
import RenderHTML from "react-native-render-html";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

export const SeeMoreScreen = ({ route, navigation }) => {
  const [scrolling, setScrolling] = React.useState(true);
  const width = useWindowDimensions().width;
  const { t, d, pic } = route.params;
  const makeBold = (str) => {
    //*hello world* hiiii
    let i = 0;
    let count = 0;
    let ans = "";
    let cache = [];
    while (i < str.length) {
      if (str[i] == "*") {
        count++;
      }
      if (count % 2 != 0) {
        if (cache.length < 1) {
          ans += "<b>";
          cache = [i, str[i]];
        } else {
          ans += str[i];
        }
      } else {
        if (cache.length > 1) {
          ans += "</b>";
          cache = [];
        } else {
          ans += str[i];
        }
      }
      i++;
    }

    if (cache.length > 1) {
      console.log("Current cache position: ", cache[0]);
      //count holds how many <b> tags we have seen
      //count / 2 gives us opening tags
      //~~ is like '//' in python
      let multi = ~~(count / 2);
      //we found the pattern was by 5
      let location = multi * 5 + cache[0];

      console.log("The position we need to change:", location);
      //make sure to swap the <b> to *
      ans = ans.slice(0, location) + "*" + ans.slice(location + 3);
      return ans;
    }
    return ans;
  };
  const replaceURLs = (message) => {
    if (!message) return;

    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.replace(urlRegex, function (url) {
      var hyperlink = url;
      if (!hyperlink.match("^https?://")) {
        hyperlink = "http://" + hyperlink;
      }
      return (
        '<a href="' +
        hyperlink +
        '" target="_blank" rel="noopener noreferrer">' +
        url +
        "</a>"
      );
    });
  };

  const addNewLines = (message) => {
    return message.replace(/\n/g, "<br>");
  };

  const zoomChecker = (event, gest, z) => {
    if (z.zoomLevel == 1) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const source = {
    html:
      "<div style='font-Size:9px'>" +
      addNewLines(replaceURLs(makeBold(d))) +
      "</div>",
  };
  React.useEffect(() => {
    navigation.setOptions({ title: t });
  }, []);
  return (
    <ScrollView scrollEnabled={scrolling}>
      <View style={styles.viewStyle}>
        <Image source={{ uri: pic }} style={styles.imageStyle} />
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={1.0}
          zoomStep={0.5}
          initialZoom={1}
          onZoomAfter={zoomChecker}
        >
          <View>
            <Card style={styles.cardStyles}>
              <Card.Content>
                <Title>
                  <Text style={styles.titleText}>{t}</Text>
                </Title>
                <Text></Text>
                <RenderHTML source={source} contentWidth={width} />
              </Card.Content>
            </Card>
          </View>
        </ReactNativeZoomableView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "black",
  },
  imageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "95%",
    height: 250,
  },
  descriptionStyle: {
    color: "black",
    fontSize: 20,
    margin: 10,
  },
  viewStyle: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyles: {
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

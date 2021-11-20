import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { SettingsIcon } from "../App/components/settingsIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import avatarPicture from "../assets/avatar.png";

const windowWidth = Dimensions.get("window").width;

const Settingscreen = ({ navigation }) => {
  let imageUrl = "";
  return (
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
                source={imageUrl ? { uri: imageUrl } : avatarPicture}
                size={80}
                marginLeft={0}
              />
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 0 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 30,
                  marginBottom: 0,
                  marginRight: 0,
                  marginLeft: 0,
                },
              ]}
            >
              Eric Monestime{" "}
            </Title>
            <View style>
              <Caption> @ Plattsburgh </Caption>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles}>
          <Text> Hello worlds </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Settingscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    paddingTop: -30,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    alignItems: "flex-end",
  },
  profileCircle: {
    marginLeft: windowWidth / 10,
  },
  Settingview: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
  },
});

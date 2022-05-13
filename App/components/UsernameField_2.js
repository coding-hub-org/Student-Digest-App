import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet } from "react-native";

export const UsernameField = ({ viewStatus, user, setUsername }) => {
  const styles = StyleSheet.create({
    input: {
      height: 30,
      margin: 0,
      borderWidth: 0,
      padding: 2,
      width: 150,
    },
  });

  if (viewStatus === "Display") {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20 }}>{user} </Text>
      </View>
    );
  }

  if (viewStatus === "Editing") {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={(newUser) => setUsername(newUser)}
          />
        </SafeAreaView>
      </View>
    );
  }

  return <Text>Something went wrong! </Text>;
};

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

export const FrequentlyAskedQuestions = () => {
  //add your buttons in the view
  return (
    <View>
      <List.AccordionGroup>
        <List.Accordion title="Who made the app?" id="1">
          <Text style={styles.items}>
            Students from the Coding-Hub club and tech start-up class have
            helped developed this app
          </Text>
        </List.Accordion>
        <List.Accordion
          title="Where does the information come
        from?"
          id="2"
        >
          <Text style={styles.items}>
            All digest information comes directly from the Student Digest
            website.
          </Text>
        </List.Accordion>
        <List.Accordion title="Where do my digest get saved?" id="3">
          <Text style={styles.items}>
            All digest are saved locally on your device.
          </Text>
        </List.Accordion>
        <List.Accordion
          title="Why do some photos have no correlation to certain digest"
          id="4"
        >
          <Text style={styles.heading}>
            Why do some photos have no correlation to certain digest
          </Text>
          <Text style={styles.items}>
            All photos are chosen based on the title of the digest, and pulled
            from an image database. The image database chooses the best option
            for the context.
          </Text>
        </List.Accordion>
      </List.AccordionGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    margin: "5%",
    fontWeight: "bold",
  },
  items: {
    margin: "5%",
  },
});

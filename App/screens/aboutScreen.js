import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";

export const AboutScreen = () => {
  //add your buttons in the view
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/SDACOVER.png")}
      />
      <ScrollView>
        <Text style={styles.textStyle}>
          The Student Digest App is Plattsburgh's most-read news app on SUNY
          Plattsburgh Campus. More than 500 students wake up to new digest every
          morning. The digest has shown no signs of aging and keeps reinventing
          itself to remain in step with its young readership. Known as a
          trend-setter that adheres to the highest standards of journalism,
          Student Digest not only provides news coverage of unrivalled depth and
          breadth but also places equal, often greater, emphasis on perspective
          and context to empower the reader. Its coverage includes every topic
          and trend of interest to the reader - national, international, city,
          community, business, health, science, technology, sports, lifestyle
          and entertainment. The Student Digest App was made to help students
          access this information as swiftly as possible.
        </Text>
        <List.AccordionGroup>
          <List.Accordion title="Meet the team!" id="1">
            <List.Item title="Nelson Tejeda" />
            <List.Item title="Christopher Ovalle" />
            <List.Item title="Jason Zheng" />
            <List.Item title="Amornrat Ajmo" />
            <List.Item title="Joey Silvanus" />
            <List.Item title="Aditya Thakkar " />
            <List.Item title="Manasi Jadhav" />
            <List.Item title="Pratyush Ketan Kapadia" style={styles.dropDown} />
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: "30%",
  },
  textStyle: {
    margin: "2%",
    padding: "4%",
    backgroundColor: "white",
    borderRadius: 30,
    textAlign: "auto",
  },
  items: {
    margin: "5%",
  },
  dropDown: {
    marginBottom: "100%",
  },
});

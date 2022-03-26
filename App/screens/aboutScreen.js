import React from "react";
import { Text, View } from "react-native";
import {
  MyButton,
  MyButton1,
  MyButton2,
  MyButton3,
} from "../components/dummyButton";

export const AboutScreen = () => {
  //add your buttons in the view
  return (
    <View>
      <Text>
        The Student Digest App is Plattsburgh's most-read news app on SUNY
        Plattsburgh Campus. More than 500 on campus students wake up new digest
        every morning. Published since ##YEAR, the digest has shown no signs of
        aging and keeps reinventing itself to remain in step with its young
        readership. Known as a trend-setter that adheres to the highest
        standards of journalism, Student Digest not only provides news coverage
        of unrivalled depth and breadth but also places equal, often greater,
        emphasis on perspective and context to empower the reader. Its coverage
        includes every topic and trend of interest to the reader - national,
        international, city, community, business, health, science, technology,
        sports, lifestyle and entertainment. Instead of taking the traditional
        role of newspapers to "mould public opinion", The Times of India
        provides the choices that enable readers to arrive at their own
        conclusions. The reader is the centre of its universe.
      </Text>
    </View>
  );
};

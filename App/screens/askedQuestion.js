import React from "react";
import { Text, View } from "react-native";
import {
    MyButton,
    MyButton1,
    MyButton2,
    MyButton3,
} from "../components/dummyButton";

export const FrequentlyAskedQuestions = () => {
    //add your buttons in the view
    return (
        <View>
            <Text>
                Who made the app?: Students from the Coding-Hub club and tech start-up class have helped developed this app
                Where does the information come from?: The student digest
                Where do my digest get saved?: All digest are saved locally on your device.
                Why do the photos sometimes don't make sense?: All photos are chosen based on the title of the digest, and pulled from an image database. The image database chooses the best option for the context.
            </Text>
        </View>
    );
};


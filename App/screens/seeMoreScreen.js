import React from "react";
import { Text,View,Button,Alert} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const SeeMoreScreen = ({navigation}) => {
    return(
        <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="dummyButton"
            color="#841584"
            accessibilityLabel="seeMore"
        />
    );
}

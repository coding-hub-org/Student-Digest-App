
import React from "react";
import { Text,View,Button,Alert} from "react-native";


export const MyButton = () => {
    return(
        <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    );
}


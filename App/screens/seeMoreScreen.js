import React from "react";
import { Text,View,Button,Alert, Image, StyleSheet,ScrollView} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const SeeMoreScreen = ({route, navigation}) => {
    const {t,d,pic} = route.params;
    return(
        <ScrollView>
            <View style = {styles.viewStyle}>
                <Image source={{uri: pic,}} style={styles.imageStyle}/>
                <Text style = {styles.titleText}>{t}</Text>
                <Text style = {styles.descriptionStyle}>{d}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    imageStyle: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: "100%",
        height : 200,
    },
    descriptionStyle: {
        margin: 10
    },
    viewStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
  });

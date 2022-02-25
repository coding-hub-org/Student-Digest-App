import React, {useEffect} from "react";
import { Text,View,Button,Alert, Image, StyleSheet,ScrollView} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Paragraph, Title } from "react-native-paper";


export const SeeMoreScreen = ({route, navigation}) => {
    const {t,d,pic} = route.params;
    React.useEffect(() => {
        navigation.setOptions({ title: t });
      }, []);
    return(
        <ScrollView>
            <View style = {styles.viewStyle}>
                <Image source={{uri: pic,}} style={styles.imageStyle}/>
                <ScrollView>
                <Card style = {styles.cardStyles}>
                    <Card.Content>
                        <Title>
                            <Text style = {styles.titleText}>{t}</Text>
                        </Title>
                        <Paragraph>
                            <Text style = {styles.descriptionStyle}>{d}</Text>
                        </Paragraph>
                    </Card.Content>
                </Card>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
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
        height : 250,
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
        justifyContent: "center"

    },
    cardStyles: {
        borderRadius: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,

    }
  });

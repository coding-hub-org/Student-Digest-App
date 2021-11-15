import React from 'react'
import {ListItem, Icon} from 'react-native-elements'
import { Text,View, StyleSheet} from 'react-native'
import {CardEcomOne,CardTen,CardFive,CardSeven} from "react-native-card-ui";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const Cards = ({navigation,name,des,img}) => {
return(
    <View>
        <Card style = {styles.cardStyle} elevation = {2} onPress = {() => {
            navigation.navigate("SeeMore", {t: name, d: des, pic: img});
        }}>
            <Card.Cover source={{ uri: img }} style={styles.test}/>
            <Card.Content>
                <Title>{name}</Title>
                <Paragraph>{des}</Paragraph>
            </Card.Content>
        </Card>
    </View>);
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
    test:{
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
  });
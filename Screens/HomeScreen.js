import React from 'react';
import { View, Text, Button, StyleSheet,ScrollView} from 'react-native';
import {MyButton} from '../App/components/dummyButton';
import { Cards } from '../App/components/card.component';


const Homescreen =({navigation}) => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Cards 
            navigation = {navigation} 
            name = {"Election Day 2021- Nov. 2nd!"} des = {"Hello,I hope this email finds you well. Believe it or not, Election Day 2021 ishere. On Nov. 2nd..."}
            img = {"https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
          />
          <Cards 
            navigation = {navigation} 
            name = {"Guest Speaker- Author/Journalist, Ken Ilgunas"}
            des = {"Environmental author and journalist Ken Ilgunas will visit campus November3, 2021 for a series of events with students/staff/faculty..."}
            img = {"https://images.pexels.com/photos/6954151/pexels-photo-6954151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
          />
          <Cards 
            navigation = {navigation} 
            name = {"3v3 Basketball Tournament"}
            des = {"Recreation will host a single day 3v3 basketball tournament inside MemorialHall gym Tuesday 11/16 starting at 7 pm..."}
            img = {"https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}
          />
        </View>
      </ScrollView>
    );
    };   
export default Homescreen;


const styles = StyleSheet.create({
      container: {
        margin: 10,
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',

      },

    });
      

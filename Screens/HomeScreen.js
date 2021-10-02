import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';



const Homescreen =({navigation}) => {
    return (
    <View style = {styles.container}> 
        <Text> Home Screen</Text>
        <Button 
          title = "Click This"
          onPress ={() => alert('Hello')}
          />
    </View>
    );
    };   
export default Homescreen;


const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8fcbbc',

      },

    });
      

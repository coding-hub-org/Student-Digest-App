import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';



const Chatscreen =({navigation}) => {
    return (
    <View style = {styles.container}> 
    
        <Text> Chat Screen</Text>
        <Button 
          title = "Click This"
          onPress ={() => alert('Button Clicked!')}
          />
    </View>
    );
    };   
export default Chatscreen;


const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8fcbbc',

      },

    });
      
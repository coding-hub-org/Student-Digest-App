import React from 'react'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Text,View } from 'react-native'

export const Cards = () => {
return(<View>
    <Card>
    <Card.Title>HELLO WORLD</Card.Title>
    <Card.Divider/>
    <Card.Image source={require('../../assets/logo.png')}>
        <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card.Image>
    </Card>
    <Card className="bg-dark text-white">
    <Card.Image source={require('../../assets/logo.png')}/>
        <Card.Title>Title</Card.Title>
        <Text>
            This is a test to see if the test goes over the image overlay.
        </Text>
        <Text>Last Updated 5 hours ago</Text>
    </Card>
    </View>);
}
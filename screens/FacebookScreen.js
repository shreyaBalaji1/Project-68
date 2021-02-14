import React from 'react';
import { View, Text } from 'react-native';

export default class FacebookScreen extends React.Component {
    render() {
        return(
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text style = {{fontSize: 20, fontWeight: "bold", color: "blue"}}>Facebook</Text>
            </View>
        );
    }
}
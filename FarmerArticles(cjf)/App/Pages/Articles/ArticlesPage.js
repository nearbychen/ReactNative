import React, {Component} from 'react';
import {Text, View} from "react-native";
export default class ArticlesPage extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 60}}>
                    ArticlesScreen
                </Text>
            </View>
        );
    }
}
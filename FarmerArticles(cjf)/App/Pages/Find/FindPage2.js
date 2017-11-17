/**
 * Created by PC on 2017/7/18.
 */
import React, {Component} from 'react';
import {Text, View} from "react-native";
export default class FindPage2 extends Component {
    
    // static navigationOptions = ({navigation}) => ({
    //     title: '发现',
    // });
    // static navigationOptions = ({ navigation, screenProps }) => ({
    //     header: null,
       
    // })

    render() {
    
        return (
            <View style={{flex: 1, backgroundColor: '#c6ff97', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50}}>
                    发现2
                </Text>
            </View>
        );
    }
}
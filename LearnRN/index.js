import React, { Component } from 'react';
import {
    AppRegistry,Navigator,BackAndroid,Platform
} from 'react-native'
import Loginleaf from './Loginleaf';
// import WaitingLeaf from '/WaitingLeaf'

export default class NaviModule extends Component{
    constructor(props) {
        super(props);
        this.renderScene = this.render.bind(this);
        this.configureScene = this.configureScene.bind(this);
        this.handleBackAndroid = this.handleBackAndroid.bind(this);
    }
    configureScene(route) {
        return Navigator.SceneConfigs.FadeAndroid;
    }
    renderScene(router, navigator) {
        this.navigator = navigator;
        switch (router.name) {
            case "login":
                return < Loginleaf navigator={navigator} />;
            case "waiting":
                return <WaitingLeaf phoneNumber={router.phoneNumber}
                    userPW={router.userPW} navigator={navigator} />    
        }
    }
    handleBackAndroid() {
        if(this.navigator.getCurrentRoutes().length>1){
            this.navigator.pop();
            return true;
        }
        return false;
    }
    componentDidMount(){
        if (Platform.OS === "android") BackAndroid.addEventListener(
            'hardwareBackPress', this.handleBackAndroid);
    }

    componentDidMount() {
        if (Platform.OS === "android") BackAndroid.removeEventListener(
            'hardwareBackPress', this.handleBackAndroid
        );
    }
    
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'login' }}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
    
    
}

AppRegistry.registerComponent('LearnRN', () => NaviModule);

import React, { Component } from 'react';
import {
    AppRegistry,BackAndroid,Platform
} from 'react-native'
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation'
import Loginleaf from './Loginleaf';
// import App from './App/Containers/App.1'
import App from './App.1'
// import LoginScreen from './App/Containers/LoginScreen'
// import WaitingLeaf from '/WaitingLeaf'

// export default class NaviModule extends Component{
//     constructor(props) {
//         super(props);
//         // this.renderScene = this.renderScene.bind(this);
//         // this.configureScene = this.configureScene.bind(this);
//         // this.handleBackAndroid = this.handleBackAndroid.bind(this);
//     }
//     configureScene(route) {
//         return Navigator.SceneConfigs.FadeAndroid;
//     }
//     renderScene(router, navigator) {
//         this.navigator = navigator;
//         switch (router.name) {
//             case "login":
//                 return < Loginleaf navigator={navigator} />;
//             case "waiting":
//                 return <WaitingLeaf phoneNumber={router.phoneNumber}
//                     userPW={router.userPW} navigator={navigator} />    
//         }
//     }
//     handleBackAndroid() {
//         if(this.navigator.getCurrentRoutes().length>1){
//             this.navigator.pop();
//             return true;
//         }
//         return false;
//     }
//     // componentDidMount(){
//     //     if (Platform.OS === "android") BackAndroid.addEventListener(
//     //         'hardwareBackPress', this.handleBackAndroid);
//     // }

//     // componentWillUnmount() {
//     //     if (Platform.OS === "android") BackAndroid.removeEventListener(
//     //         'hardwareBackPress', this.handleBackAndroid
//     //     );
//     // }
    
//     render() {
//         return (
//             <Navs
//                 />
//         );
//     }
    
    
// }


AppRegistry.registerComponent('LearnRN', () => App);

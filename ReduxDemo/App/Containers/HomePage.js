/**
 * Created by PC on 2017/7/20.
 */
import React, {Component} from 'react';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from "./ChatScreen";
import GoodsPage from "./GoodsPage";
import FindPage from "./FindPage";
import MineScreen from "./MinePage";
import TabBarItem from "../Components/TabBarItem";
export default class MainComponent extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const TabRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            // tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/chats.png')}
                    selectedImage={require('../Images/chats.png')}
                />
            ),
        }),
    }
    ,goods: {
        screen: GoodsPage,
        navigationOptions: ({navigation}) => ({
            // tabBarLabel: '物资',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/chats.png')}
                    selectedImage={require('../Images/chats.png')}
                />
            ),
        }),
    }
    ,find: {
        screen: FindPage,
        navigationOptions: ({navigation}) => ({
            // tabBarLabel: '发现',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/chats.png')}
                    selectedImage={require('../Images/chats.png')}
                />
            ),
        }),
    }
    ,
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            // tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/logout.png')}
                    selectedImage={require('../Images/logout.png')}
                />
            ),
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {}
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    },
    Mine: {
        screen: MineScreen,
    },
    Find: {
        screen: FindPage,
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
/**
 * Created by PC on 2017/7/20.
 */
import React, {Component} from 'react';
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";
import HomePage from "./HomePage";
import ArticlesPage from "./Articles/ArticlesPage";
import FindPage from "./Find/FindPage";
import MinePage from "./Mine/MinePage";
import FindPage2 from "./Find/FindPage2";
import TabBarItem from "../Components/TabBarItem";
import * as CardStackStyleInterpolator from "react-navigation";

import { Provider, connect } from 'react-redux'
import configureStore from '../Redux/CreateStore'


const store = configureStore()


export default class MainComponent extends Component {
    
    render() {
        let Global = require('../Constants/Global');
        Global.store = store;
        Global.contentext = this;
        this;
        return (
            // <Tab />
            <Navigator />
        );
    }
}

const TabRouteConfigs = {
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/Tabbar/icon_tabbar_home.png')}
                    selectedImage={require('../Images/Tabbar/icon_tabbar_home_selected.png')}
                />
            )
        }),
    },
    Articles: {
        screen: ArticlesPage,
        navigationOptions: {
            tabBarLabel: '物资',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/Tabbar/icon_chats_articles_chat.png')}
                    selectedImage={require('../Images/Tabbar/icon_tabbar__articles_selected.png')}
                />
            ),
        },
    },
    FindScreen: {
        screen: FindPage,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/Tabbar/icon_tabbar_find.png')}
                    selectedImage={require('../Images/Tabbar/icon_tabbar_find_selected.png')}
                />
            ),
        },
    }
    ,
    Mine: {
        screen: MinePage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../Images/Tabbar/icon_tabbar_mine.png')}
                    selectedImage={require('../Images/Tabbar/icon_tabbar_mine_selected.png')}
                />
            ),
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {tabBarVisible: true,},
    // animationEnabled: true,
    // swipeEnabled: true
    paths: 'page/home',
    mode: 'card',
    headerMode: 'screen',
    cardStyle: {backgroundColor: "#ffffff"},
    transitionConfig: (() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })),
    onTransitionStart: (() => {
        console.log('页面跳转动画开始');
    }),
    onTransitionEnd: (() => {
        console.log('页面跳转动画结束');
    }),
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    },
    FindPage2: {
        screen: FindPage2,
        navigationOptions: ({navigation}) => ({
            title: '发现2',
        }),
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '标题',
        // headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
    
};
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);


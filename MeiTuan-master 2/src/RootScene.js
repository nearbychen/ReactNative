/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import color from './widget/color'
import { screen, system, tool } from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'

import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

// create a component
class RootScene extends PureComponent {
    constructor() {
        super()
        var tmp = 123;
        
        if (true) {
          tmp = 'abc'; // ReferenceError
          let tmp;
        }
        StatusBar.setBarStyle('light-content')
    }
    // 注意这个方法前面有async关键字
    async getMoviesFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('http://192.168.199.245:8080/WebServlet/LoginServlet', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
    
                body: JSON.stringify({
                  requestCode: '',
                  requestParam: ({
                    name: '123123',
                    password: 'saa',
                  })
                })
            });
            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson.movies;
        } catch(error) {
            console.error(error);
        }
    }
    getMoviesFromApiAsync() {
        return fetch('http://192.168.199.245:8080/WebServlet/LoginServlet', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({
              requestCode: '',
              requestParam: ({
                name: 'yourValue',
                password: 'yourOtherValue',
              })
            })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);

        });
    } 



    render() {
        var easyUTF8 = function(gbk){
            if(!gbk){return '';}
            var utf8 = [];
            for(var i=0;i<gbk.length;i++){
                var s_str = gbk.charAt(i);
                if(!(/^%u/i.test(escape(s_str)))){utf8.push(s_str);continue;}
                var s_char = gbk.charCodeAt(i);
                var b_char = s_char.toString(2).split('');
                var c_char = (b_char.length==15)?[0].concat(b_char):b_char;
                var a_b =[];
                a_b[0] = '1110'+c_char.splice(0,4).join('');
                a_b[1] = '10'+c_char.splice(0,6).join('');
                a_b[2] = '10'+c_char.splice(0,6).join('');
                for(var n=0;n<a_b.length;n++){
                    utf8.push('%'+parseInt(a_b[n],2).toString(16).toUpperCase());
                }
            }
            return utf8.join('');
        };

        function UnicodeToUtf8(unicode) { 
            var uchar; 
            var utf8str = ""; 
            var i; 
            for(i=0; i<unicode.length;i+=2){      
              uchar = (unicode[i]<<8) | unicode[i+1];        //UNICODE为2字节编码，一次读入2个字节 
              utf8str = utf8str + String.fromCharCode(uchar);  //使用String.fromCharCode强制转换 
            } 
            return utf8str; 
          } 
            // String mm =   EscapeUnescape.unescape( 'something' ， "UTF-8");
        var s = easyUTF8('阿萨德')
        var ws = new WebSocket('http://192.168.1.31:3333');
        
        ws.onopen = () => {
          //
          打开一个连接
          ws.send(s); // 发送一个消息
          console.log('发送一个消息d',s);
        };
        
        ws.onmessage = (e) => {
          // 接收到了一个消息
          console.log('接收到了一个消息',e.data);
        };
        
        ws.onerror = (e) => {
          // 发生了一个错误
          console.log('发生了一个错误',e.message);
        };
        
        ws.onclose = (e) => {
          // 连接被关闭了
          console.log('连接被关闭了',e.code, e.reason);
        };
        this.getMoviesFromApi();
        // fetch('http://192.168.1.3:8080/WebServlet/LoginServlet', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
            
        //     body: JSON.stringify({
        //       requestCode: '',
        //       requestParam: ({
        //         name: 'yourValue',
        //         password: 'yourOtherValue',
        //       })
        //     })
        // })

        
        // 注意这个方法前面有async关键字
        // async getMoviesFromApi() {
        //     try {
        //         // 注意这里的await语句，其所在的函数必须有async关键字声明
        //         let response = await fetch('http://192.168.1.3:8080/WebServlet/LoginServlet');
        //         let responseJson = await response.json();
        //         console.log(responseJson)
        //     return responseJson.movies; 
        //     }   catch(error) {
        //             console.error(error);
        //     }
        // }
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '团购',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
                    />
                )
            }),
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}
                    />
                )
            }),
        },

        Order: {
            screen: OrderScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_order@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Web: { screen: WebScene },
        GroupPurchase: { screen: GroupPurchaseScene },
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.theme }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
);
//make this component available to the app
export default RootScene;

/**
 * Created by PC on 2017/7/18.
 */
import React, {Component} from 'react';
import { Text, Button, View } from "react-native";
import FindPage2 from "./FindPage2";
import NavigatorActions from '../../Redux/NavigatorRedux'

export default class FindPage extends Component {

    // static navigationOptions = ({navigation}) => ({
    //     title: '发现',
    // });

    // static navigationOptions = ({ navigation }) => ({
        
    //     tabBarVisible: false,
    // });
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        tabBarOnPress:(({ route, index },jumpToIndex)=>{
            // console.log(route);
            // alert(index);
            // console.log(this.props);
            // console.log(screenProps);
            // alert(badgeNumber);

            // DeviceEventEmitter.emit('badge',badgeNumber++);
            jumpToIndex(index);
        }),
        // 下面就是文章中修改主题色的方法
        headerStyle: { backgroundColor: 'white' },
        // headerStyle:{backgroundColor:screenProps?screenProps.themeColor:'#4ECBFC'},
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'发现',
        tabBarLabel:navigation.state.params?navigation.state.params.tabBarLabel:'发现',
        tabBarIcon: (({tintColor,focused}) => {
            if(focused){
                // 做操作
            }
            return(
                <Image
                    // 可以用过判断focused来修改选中图片和默认图片
                    source={!focused ? ShiTuIcon : GankIcon}
                    // 如果想要图标原来的样子可以去掉tintColor
                    style={[{height:35,width:35 }]}
                />
            )
        }),
        headerRight:(
            <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params.navigatePress()}>我的</Text>
        ),
    })

    render() {
        // let navigations = this.props.navigation;
        let Global = require('../../Constants/Global');
        return (
            <View style={{flex: 1, backgroundColor: '#c6ff97', justifyContent: 'center', alignItems: 'center'}}>
                
                <Button title='发现' onPress={() => {
                    
                    // Global.store.dispatch(NavigatorActions.tabBarVisibleHide())
                    this.props.navigation.navigate('FindPage2')
                    // this.props.navigation.push(
                    //     {
                    //         component: FindPage2,
                    //         title: 'FindPage2',
                    //         passProps: {
                    //             'text':'sadasd',
                    //         }

                    //     }
                    // )
                }}
                />
            </View>
        );
    }
}
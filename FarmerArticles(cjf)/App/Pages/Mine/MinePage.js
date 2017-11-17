/**
 * Created by PC on 2017/7/18.
 */
import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, ScrollView, RefreshControl } from "react-native";

import { Heading1, Heading2, Paragraph } from '../../Components/Text'
import { color, DetailCell, NavigationItem, SpacingView } from '../../Components'
import { screen, system } from '../../Services'

export default class MinePage extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        // header: null,
        headerTitle:'我的',
        tabBarOnPress:(({ route, index },jumpToIndex)=>{
            // console.log(route);
            // alert(index);
            jumpToIndex(index);
        }), 
        // headerStyle: { backgroundColor: '5da8ff' },
        headerStyle: { backgroundColor: '#5da8ff' },
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../Images/Navigation/icon_navigationItem_set_white.png')}
                    onPress={() => {
                        
                    }} />
                <NavigationItem
                    icon={require('../../Images/Navigation/icon_navigationItem_message_white.png')}
                    onPress={() => {
                        navigation.state.params.navigatePress()
                    }} />
            </View>
            
        ),
    })
    
    state: {
        isRefreshing: boolean
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    componentDidMount() {
        
        // 通过在componentDidMount里面设置setParams将title的值动态修改
        this.props.navigation.setParams({
            headerTitle:'干货集中营',
            tabBarLabel:'干货',
            navigatePress:this.navigatePress
        });
    }

    navigatePress = () => {
        alert('点击消息');
    }

    renderCells() {
        let cells = []
        let dataList = this.getDataList()
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
                cells.push(cell)
            }
            cells.push(<SpacingView key={i} />)
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <Image style={styles.avatar} source={require('../../Images/Mine/avatar.png')} />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Heading1 style={{ color: 'white' }}>素敌</Heading1>
                            <Image style={{ marginLeft: 4 }} source={require('../../Images/Mine/beauty_technician_v15.png')} />
                        </View>
                        <Paragraph style={{ color: 'white', marginTop: 4 }}>个人信息 ></Paragraph>
                        <Paragraph style={{ color: 'black', marginTop: 10 }}>已连续签到2天，明日签到+10积分 ></Paragraph>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.background }}>
                <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.theme }} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray' />}
                >
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        //     <View style={{flex: 1, backgroundColor: '#9de2ff', justifyContent: 'center', alignItems: 'center'}}>
        //         <Text style={{fontSize: 50}}>
        //             我的
        //         </Text>
        //         <Text style={styles.instructions} onPress={()=>{
        //       const { navigate } = this.props.navigation;
        //       navigate('Detail1',{
        //           headerTitle:'我是修改后的文字'
        //       });
        //   }}>
        //             点我跳转到Detail1，跳转的时候携带参数，修改了Detail1的导航栏文字
        //         </Text>
        //     </View>
        );
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000);
    }

    getDataList() {
        return (
            [
                [
                    { title: '我的信息', image: require('../../Images/Mine/avatar.png') },
                    { title: '购买记录', subtitle: '￥95872385', image: require('../../Images/Mine/avatar.png') },
                    { title: '租赁记录', subtitle: '63', image: require('../../Images/Mine/avatar.png') },
                    
                ],
                [
                    { title: '店铺关注', image: require('../../Images/Mine/avatar.png') },
                    { title: '我的收藏', image: require('../../Images/Mine/avatar.png') },
                    { title: '内容订阅', image: require('../../Images/Mine/avatar.png') },
                    
                ],
                [
                    { title: '系统设置', image: require('../../Images/Mine/avatar.png') },
                    { title: '意见反馈', subtitle: '我要合作我要合作', image: require('../../Images/Mine/avatar.png') },
                    { title: '浏览历史', image: require('../../Images/Mine/avatar.png') }
                ]
            ]
        )
    }

}   

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.theme,
        paddingBottom: 5
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

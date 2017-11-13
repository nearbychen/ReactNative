/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 生命周期
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/*
es6方式
 */
export default class  LifecycleComponent extends Component{
    constructor(props) {
        super(props);
        console.log('--constructor(在组件挂载之前调用一次)--');
        this.state={
            count:0,
        }
    }
    componentWillMount(){
        console.log('--componentWillMount(在初始化渲染执行之前立刻调用)--');
    }

    componentDidMount(){
        console.log('--componentDidMount(在初始化渲染执行之后立刻调用一次)--');
    }

    componentWillReceiveProps(nextProps){
        console.log('--componentWillReceiveProps(在组件接收到新的 props 的时候调用)--');
    }

    shouldComponentUpdate( nextProps,  nextState){
        console.log('--shouldComponentUpdate(在接收到新的 props 或者 state，将要渲染之前调用)--');
        return true;
    }

    componentWillUpdate( nextProps,  nextState){
        console.log('--componentWillUpdate(在接收到新的 props 或者 state 之前立刻调用)--');
    }

    componentDidUpdate( prevProps,  prevState){
        console.log('--componentDidUpdate(更新之后)--');
    }

    componentWillUnmount(){
        console.log('--componentWillUnmount(移除)--');
    }


    render(){
        console.log('--render(开始渲染)--');
        return <View>
            <Text
                 style={{fontSize:20,backgroundColor:'red'}}
                 onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                }}
                 >打我呀.</Text>
                 <Text style={{fontSize:20}}>被打了{this.state.count}</Text>
        </View>
    }
}


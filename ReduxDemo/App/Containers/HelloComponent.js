/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 组件的导出使用
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
export default class  HelloComponent extends Component{
    render(){
        let name = "张三";
        age = 18;

        function test(){
            console.log(this)
            console.log(this.name)
            console.log(this.age)
        };

// 全局函数内部的this默认为全局对象window
        test(); // [object Window] 张三 18


        var obj = {name: "李四", age: 20};
// 更改内部的this指针引用对象为obj
        test.apply(obj); // [object Object] 李四 20


        function foo(a, b){
            console.log(this.name)
            console.log(a)
            console.log(b)
        }
// 改变this引用为obj，同时传递两个参数
        foo.apply(obj, [12, true]); // 李四 12 true


        function bar(){
            var o = {name: "王五"};
            // 调用foo()函数，并改变其this为对象o，传入当前函数的参数对象arguments作为其参数
            foo.apply(o, arguments);
        }
        bar("CodePlayer", "www.365mini.com"); // 王五 CodePlayer www.365mini.com=
        return <Text style={{fontSize:20,backgroundColor:'red'}}>hello.{this.props.name}</Text>
    }
}


/*
es5方式
 */
// var HelloComponent=React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>hello</Text>
//     }
// })
// module.exports=HelloComponent;

/*
函数方式
无状态，不能使用this
props 属性访问
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>hello.{props.name}</Text>;
// }
// module.exports = HelloComponent;
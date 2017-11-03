/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,TextInput,PixelRatio
} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;

const {height,width} = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'ios-屏幕高度为：'+height+'屏幕宽度为：'+width,
  android: 'android-屏幕高度为：'+height+'屏幕宽度为：'+width,
});
const pixelRatio = PixelRatio.get();

export default class Loginleaf extends Component<{}> {
  static myStaticObject = 'init value';
  static myStaticMethod() {
    console.log('myStaticMethod is called');
  }
  constructor(props) {
    super(props)
    this.myProperty1 = 'test';
    this.myProperty2 = true;
    this.state = {
      inputedNum: '',
      inputedPW: ''
    };
    this.updateNum = this.updateNum.bind(this);
    this.updatePW = this.updatePW.bind(this);
  }

  updateNum(newText) {
    console.log('this updateNum');
    console.log(this);
    this.setState((oldState) => {
      for (var aName in oldState) {
        console.log(aName);
        console.log(oldState[aName]);
      }
      return {
        inputedNum: newText,
        aBrandnewStateVariable: 'I am a new variable.'
      };
    }, this.changeNumDone);

  }

  changeNumDone(){
      console.log('React Native has changed inputed Num');
  }

  updatePW(newText) {
    this.setState(()=>{
      return {
          inputedPW: newText,
      };
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.inputedNum.length < 3) return false;
    return true;
  }
  
  render() {
    let aValue;
    // console.log('Render has been executed.');
    // console.log('Screen height is:'+height);
    // console.log('aValue is:'+aValue);
    // console.log('The type of a9iVlaue is:'+typeof(aValue));
    console.log('this render');
    console.log(this);
    return (
      
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
          placeholder={'请输入手机号'}
          // onChangeText={(inputedNum) => this.setState({ inputedNum })}
          onChangeText={this.updateNum}
        /> 
        <Text style={styles.textPromptStyles}>
          您输入的手机号:{this.state.inputedNum}
        </Text>
        <TextInput style={styles.textInputStyle}
          placeholder={'请输入密码'}
          password={true}
          onChangeText={this.updatePW}/>
        <Text style={styles.bigTextPropt}>
          确 定
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle: {
    fontSize: 20,
    margin: widthOfMargin,
    backgroundColor:'gray'
  },
  textPromptStyles: {
    margin: widthOfMargin,
    fontSize: 20,
  },
  bigTextPropt:{
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  }
});

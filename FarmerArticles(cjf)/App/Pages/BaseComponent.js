
import React, {ReactPropTypes , Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

import styles from './Styles/BaseComponent.style';

/**
 * 基类，封装了一些基本的操作，比如网络操作状态处理
 */
export default class BaseComponent extends Component<{}> {

  /**
   * 正在加载视图
   */
  loadingView(){
    return(
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            style={styles.centering}
          />
        </View>
      );
  }

  /**
   * 加载失败视图
   */
  loadErrorView(){
    return (
        <View style={styles.container}>
          <Button title="点击重试" onPress={this._handleRetry}/>
          <Text>{this.props.error}</Text>
        </View>
      );
  }

  _handleRetry = () =>{
    if(this.handleRetry){
        this.handleRetry();
    }else{
        console.warn('neet to rewrite handleRetry!');
    }
  }

}

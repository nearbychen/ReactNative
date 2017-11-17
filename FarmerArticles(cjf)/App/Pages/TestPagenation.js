import React from 'react';
import {View,Button} from 'react-native';

import BaseComponent from './BaseComponent';
import {requestData} from '../Services/NetworkUtil';

/**
 * @description 
 * 测试获取分页数据，获取大量数据时，当退出这个页面后不应该保存页面
 * 数据，所以页面数据使用state保存
 * @author chenqingsong
 * @export
 * @class TestPagenation
 * @extends {BaseComponent}
 */
export default class TestPagenation extends BaseComponent{

    constructor (props) {
        super(props);
        this.state = {
            resultList : [],
            hasMorePage : true,
        }
        //每页加载最大条数
        this.pagePerPage = 20;
        this.currentPage = 0;
    }

    render () {
        console.log( 'render list data------------->'+ this.state.resultList );
        return(
            <View>
              <Button title="获取数据" onPress={this._handlePress}/>
            </View>
        );
    }

    _handlePress = () =>{
        let body = {
            menu:'菜花',
            pn:this.currentPage + 1,
            rn:this.pagePerPage,
            key:'f46fd9db46530611953fdc551f028a52',
        };
        //这种写法已放弃治疗，太麻烦了
        // requestData(body , this.onSuccess, this.onFail);
        //还是这种方式更漂亮，更简洁，程序员都喜欢这样的
        requestData(body)
        .then((response) => {
            console.log('success------------->'+ JSON.stringify(response));
        })
        .catch((error) => {
            console.log('error------------->'+ error);
        });
    }

    //要不是因为这个是测试类，这堆代码早删除了。
    // onSuccess = (responseData) =>{
    //     // console.log('success------------->'+ JSON.stringify(responseData));
    //     this.setState((preState , props) => {
    //         return ({
    //             resultList: [ ...preState.resultList , responseData.result.data],
    //         })
    //     });
    //     this.currentPage ++;
    // }

    // onFail = (error) =>{
    //     console.log('error------------->'+ error);
    // }
}


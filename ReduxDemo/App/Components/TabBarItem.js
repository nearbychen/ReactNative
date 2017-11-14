/**
 * Created by PC on 2017/7/18.
 */
import React, {Component} from 'react';
import {Image} from "react-native";
export default class TabBarItem extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        console.debug("-----------------------------------------------");
        console.debug(this.props);
        console.debug("===============================================");
        return (
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                   style={ {tintColor: this.props.tintColor, width: 23, height: 23} }
            />
        );
    }
}
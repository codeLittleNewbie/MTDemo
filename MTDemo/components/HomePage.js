/**
 * Created by W-Q on 2017/7/29.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import NewPage from "./NewPage"
import test from '../page/Mine/MinePage';

export default class HomePage extends Component{

    static defaultProps = {
        navigator : ""
    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5}
                              style={styles.btnStyle}
                              onPress={() => this.goToNewPage()}>
                <Text>
                    我是文字
                </Text>
            </TouchableOpacity>
        )
    }
    goToNewPage(){
        this.props.navigator.push({
            component:test,
            title:"NewPage",
            params:{
                id:10001,
            }
        })
    }
}

const styles = StyleSheet.create({
    btnStyle:{
        marginTop:40,
    }
});
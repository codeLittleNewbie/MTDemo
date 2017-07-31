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


export default class HomePage extends Component{

    static defaultProps = {
        title : "",
    };

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5}
                              style={styles.btnStyle}
                              onPress={() => this.goBack()}>
                <Text>
                    {this.props.id}
                </Text>
                <Text>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
    goBack(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    btnStyle:{
        marginTop:40,
    }
});
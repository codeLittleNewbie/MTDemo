/**
 * Created by W-Q on 2017/7/30.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';

export default class BoldLine extends Component{
    render(){
        return(
            <View style={styles.BoldLineStyle}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    BoldLineStyle : {
        height : 10,
        backgroundColor : "#ddd",
    }
});
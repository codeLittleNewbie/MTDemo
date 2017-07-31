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
    Image,
    TextInput,
} from 'react-native';

export default class LightLine extends Component{
     render (){
         return (
             <View style={styles.outerStyle}>
                <View style={styles.lightLineStyle}>

                </View>
             </View>
         )
     }
}

const styles = StyleSheet.create({
    outerStyle : {
        backgroundColor : "white",
    },
    lightLineStyle : {
        borderBottomWidth : 1,
        borderColor : "#dddddd",
        height : 1,
        marginLeft : 20,
    }
});
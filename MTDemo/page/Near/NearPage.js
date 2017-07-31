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
} from 'react-native';

import NearBar from '../../components/NearBar'


var option = {
    leftName : "大地商务港",
    placeHold : "好吃 好喝 又好玩",
};

export default class NearPage extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <NearBar option={option}/>
                <Text>
                    HomePage
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:"green",
        marginTop:20,
    }
});


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


import ShopBar from '../../components/ShopBar';
import LightLine from '../../components/LightLine';

var option = {
    leftName : "订单"
};

export default class OrderPage extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                <ShopBar option={option}/>
                <LightLine/>
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



/**
 * Created by W-Q on 2017/8/1.
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


export default class OrderView extends Component{
    render(){
        return(
            <View style={styles.topView}>
                <View style={styles.leftViewStyle}>
                    <Text style={styles.orderText}>我的订单</Text>
                </View>
                <View style={styles.rightViewStyle}>
                    <Text style={styles.allOrderText}>全部订单</Text>
                    <Image style={styles.imageStyle}
                    source={{uri : "trip_travel__lion_more_date_icon"}}>
                    </Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topView : {
        height : 44,
        flexDirection : "row",
        backgroundColor : "white",
        borderBottomColor : "#ccc",
        borderBottomWidth : 1,
    },
    leftViewStyle : {
        flex : 1,
        justifyContent : "center",
    },
    orderText : {
        marginLeft : 10,
    },
    rightViewStyle : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "center",
    },
    imageStyle : {
        width : 9,
        height : 9,
        marginRight : 10,
    },
    allOrderText : {
        fontSize : 12,
        color : "gray",
    }
});
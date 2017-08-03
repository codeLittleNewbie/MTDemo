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

export default class OrderCategoryBar extends Component{
    render(){
        return(
            <View style={styles.boldLine}>
                <Text style={styles.lastOrder}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boldLine : {
        height : 20,
        flex : 1,
        flexDirection : "row",
        backgroundColor : "#ccc",
        alignItems : "center",

    },
    lastOrder : {
        fontSize : 12,
        marginLeft : 10,
    }
});
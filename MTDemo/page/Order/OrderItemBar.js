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


var Dimensions = require("Dimensions");
var windowWidth = Dimensions.get("window").width;
var col = 4;
var itemWidth = 60;
var margin = (windowWidth - col * itemWidth) / (col + 1);

export default class OrderItemBar extends Component{

    static defaultProps = {
        orderbars : [],
    };

    render(){
        return(
            <View style={styles.orderItemView}>
                {this.renderItem(this.props.orderbars)}
            </View>
        )
    }

    renderItem(renderItem){
        var items = [];

        for (var i=0;i<renderItem.length;i++){
            var item = renderItem[i];

            items.push(
                <View key={i}
                      style={styles.itemViewStyle}>
                    <Image style={styles.imageStyle}
                    source={{uri : item.icon}}>
                    </Image>
                    <Text style={styles.contentStyle}>{item.title}</Text>
                    {this.renderCircle(item)}
                </View>
            )
        }
        return items;
    }

    renderCircle(item){
        if (!item.hasMsg){
           return ;
        }else {
            return(
                <View style={styles.circlesStyle}>
                    <Text style={styles.number}>{item.msgNumber}</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    orderItemView : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        height : 55,
        backgroundColor : "white",
    },
    itemViewStyle : {
        alignItems : "center",
        marginLeft : margin,
        width : itemWidth,
    },
    imageStyle : {
        height : 30,
        width : 30,
    },
    contentStyle : {
        fontSize : 12,
    },
    circlesStyle : {
        backgroundColor : "red",
        position : "absolute",
        top : 2,
        left : 38,
        borderRadius : 10,
        height : 10,
        width : 10,
        alignItems : "center",
    },
    number : {
        backgroundColor : "transparent",
        fontSize : 8,
        color : "white",
    }
});
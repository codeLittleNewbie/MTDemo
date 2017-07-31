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
} from 'react-native';

export default class HomeCategory extends Component{

    static defaultProps = {
        option : []
    };

    render(){

        if (this.props.option.length == 0){
            return (<View></View>)
        }

        return (
            <View style={styles.outerViewStyle}>
                {this.renderItems()}
            </View>
        )
    }

    renderItems(){
        var items = [];

        for (var i = 0; i < this.props.option.length; i++) {
            var item = this.props.option[i];

            // 作用域问题,需要再套用一个函数,将item的值传入
            // 每次年纪时可以从上一个函数的作用域中找到item,就不需要再往上级查找了
            // 因为点击事件最外层的item此时已经遍历结束,所以他的值永远是数组中最后一位
            this.renderItem(item,items,i);

        }
        return items;
    }

    renderItem(item,items,i){
        items.push(
            <TouchableOpacity key = {i}
                              activeOpacity={0.7}
                              onPress={() => {alert(item.title)}}
                              style={styles.categoryItemView}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <Text style={[{color : item.deccrptionColor},styles.descrptionStyle]}>{item.descrption}</Text>
                <Image style={styles.imageStyle}
                       source={{uri : item.imageUrl}}>
                </Image>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    outerViewStyle : {
        flexDirection : "row",
    },
    categoryItemView : {
        flex : 1,
        borderRightWidth : 1,
        borderRightColor : "#ddd",
        borderBottomWidth : 1,
        borderBottomColor : '#ddd',
        justifyContent : "center",
        alignItems : "center",
    },
    titleStyle : {
        fontSize : 18,
        color : "rgb(130,135,136)",
        marginTop : 6,
        marginBottom : 6,
    },
    descrptionStyle : {
        fontSize : 12,
        marginBottom : 6,
    },
    imageStyle : {
        width : 50,
        height : 50,
        borderRadius : 25,
        marginBottom : 6,
    }
});
//130 135 136
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
    ScrollView,
} from 'react-native';


var Dimensions = require("Dimensions");
var windowWidth = Dimensions.get("window").width;
var col = 5;
var itemWidth = 50;
var margin = ( windowWidth - (col * itemWidth)) / (col + 1);

export default class HomeMenu extends Component {


    // http://47.93.30.78:8080/MeiTuan/home

    constructor(props) {
        super(props);
        this.state = {
            index : 0,
        }
    }


    render() {
        // 判断当前props内是否有值,如果没有那么直接return
        if (this.props.option.length == 0){
            return (<View></View>);
        }


        return (
            <View>
                <ScrollView style={styles.menuStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            onMomentumScrollEnd={(event) => this.scrollEnd(event)}>

                    <View style={styles.outerViewStyle}>
                        {this.renderMenu("first")}
                    </View>

                    <View style={styles.outerViewStyle}>
                        {this.renderMenu("second")}
                    </View>

                </ScrollView>

                {/*标识圆点*/}
                <View style={styles.circlesStyle}>
                    {this.renderCircle()}
                </View>
            </View>

    )
    }

    scrollEnd(event){
        var x = event.nativeEvent.contentOffset.x;
        this.setState({
            index : x / windowWidth,
        })
    }

    renderMenu(value) {

        var length = 0;
        var i = 0;
        if (value == "first") {
            length = this.props.option.length - 10;
        } else if (value == "second") {
            i = 10;
            length = this.props.option.length;
        }

        var items = [];

        for (var i = i; i < length; i++) {
            var item = this.props.option[i];

            this.renderCircleView(item,items,i)
        }
        return items;
    }

    renderCircleView(item,items,i){
        items.push(
            <TouchableOpacity
                activeOpacity={0.7}
                key={i}
                onPress={()=>{alert(item.title)}}>
                <View style={styles.itemViewStyle}>
                    <Image style={styles.itemImgStyle}
                           source={{uri: item.icon}}>
                    </Image>
                    <Text style={styles.itemTextStyle}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderCircle() {

        var items = [];

        for (var i=0;i<2;i++){
            if (i == this.state.index){
                items.push(
                    <View key={i}
                          style={[styles.ItemCircle,{backgroundColor : "#06C1AE"}]}>

                    </View>
                )
            }else {

                items.push(
                    <View key={i}
                          style={[styles.ItemCircle]}>

                    </View>
                )
            }

        }

        return items;
    }
}

const styles = StyleSheet.create({
    outerViewStyle: {
        flexWrap: "wrap",
        flexDirection: "row",
        height: 160,
        width: windowWidth,
        backgroundColor: "rgb(242,251,254)",
    },
    menuStyle: {
        backgroundColor: "rgb(242,251,254)",
    },
    itemViewStyle: {
        height: 70,
        width: 50,
        marginTop: 10,
        marginLeft: margin,
        justifyContent: "center",
        alignItems: "center",
    },
    itemImgStyle: {
        width: 50,
        height: 50,
    },
    itemTextStyle: {
        textAlign: "center",
    },

    // 标识圆点
    circlesStyle: {
        height: 20,
        backgroundColor: "rgb(242,251,254)",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row",
    },
    ItemCirclesStyle : {
        flexDirection : "row",
    },

    ItemCircle: {
        borderRadius : 5,
        width: 8,
        height: 8,
        backgroundColor : "#ddd",
        marginLeft : 10,
    },
});
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
} from 'react-native';

var Dimensions = require("Dimensions");
var windowWidth = Dimensions.get("window").width;


var col = 4;
var width = 70;
var marginX = (windowWidth - col * width) / (col + 1);


export default class Play extends Component{


    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        this.state = {
            dataSource : ds.cloneWithRows(this.props.playItem.nearbeans),
            topLables : this.props.playItem.topLables,
            activeIndex : 0,
        }
    }

    render(){

        // 判断是否获取到数据
        if (this.props.playItem.nearbeans == undefined){

            return(<View></View>);
        }


        return (
            <View style={styles.ViewStyle}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowDate) => this.renderItem(rowDate)}
                    renderHeader={() => this.renderItemHeader(this.state.topLables)}>
                </ListView>
            </View>
        )
    }

    renderItem(rowDate){
        return (
            <TouchableOpacity
                onPress={() => alert(rowDate.storeName)}
                style={styles.cellStyle}
                activeOpacity={0.8}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image style={styles.leftImageStyle}
                           source={{uri : rowDate.icon}}
                    >
                    </Image>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    {/*上*/}
                    <View style={styles.topViewStyle}>
                        <Text style={styles.storeName}
                              numberOfLines={1}>{rowDate.storeName}</Text>
                        <View style={styles.tagIconsViewStyle}>
                            {this.renderTagIcon(rowDate.tagIcons)}
                        </View>
                        <Text style={styles.distance}>{rowDate.distance}</Text>
                    </View>
                    {/*中*/}
                    <View style={styles.middleViewStyle}>
                        <Image
                            style={styles.starIconStyle}
                            source={{uri : rowDate.starIcon}}
                            resizeMode="contain">
                        </Image>
                        <Text style={styles.price}>人均价 : &yen;{rowDate.price}</Text>
                    </View>
                    {/*下*/}
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.descrption}>{rowDate.descrption}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    renderItemHeader(topLables){
        return (
            <View style={styles.headerView}>
                {this.renderCategory(topLables)}
            </View>
        )
    }
    renderCategory(topLables){
        var items = [];

        for (var i=0;i<topLables.length;i++){
            var item = topLables[i];

            this.scope(item,i,items);

        }

        return items;
    }
    renderTagIcon(tagIcons){

        var items = [];

        for (var i=0;i<tagIcons.length;i++){
            var item = tagIcons[i];
            items.push(
                <Image style={styles.tagIconStyle}
                       source={{uri : item}}
                       resizeMode="contain"
                       key={i}>
                </Image>
            )
        }

        return items;
    }
    scope(item,i,items){

        var defaultColor = i == this.state.activeIndex ? "#FF4645" : "white";
        var defaultTextColor = i == this.state.activeIndex ? "white" : "#9d9d9d";

        items.push(
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.categoryItem,{backgroundColor : defaultColor}]}
                key={i}
                onPress={() => {
                    this.setState({
                        activeIndex : i,
                    })
                }}>
                <Text style={[styles.categoryItemText,{color : defaultTextColor}]}>{item}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    ViewStyle : {
        flex : 1,
    },
    cellStyle : {
        height : 100,
        flexDirection : "row",
        backgroundColor : "#F5FCFF",
        borderBottomWidth : 1,
        borderBottomColor : "#ccc"
    },
    leftViewStyle : {
        flex :1,
        height : 100,
        width : 100,
        justifyContent : "center",
        alignItems : "center",
    },
    leftImageStyle : {
        height : 90,
        width : 90,
    },
    rightViewStyle : {
        flex : 2,
    },
    topViewStyle : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },
    tagIconsViewStyle : {
        flexDirection : "row",
    },
    storeName : {
        fontSize : 14,
        width : 100,
    },
    tagIconStyle : {
        width : 13,
        height : 13,
        marginLeft : 3,
    },
    distance : {
        fontSize : 12,
        marginRight : 10,
    },
    middleViewStyle : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
    },
    starIconStyle : {
        width : 60,
        height : 12,
    },
    price : {
        fontSize : 12,
        color : "#9d9d9d",
        marginLeft : 10,
    },
    bottomViewStyle : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
    },
    descrption : {
        fontSize : 12,
        color : "#9d9d9d"
    },


    // 头部
    headerView : {
        height : 70,
        flexDirection : "row",
        backgroundColor : "#ccc",
        flexWrap : "wrap",
    },
    categoryItem : {
        width : width,
        height : 20,
        marginLeft : marginX,
        marginTop : 10,
        borderRadius : 7,
    },
    categoryItemText : {
        textAlign : "center",
        marginTop : 3,
        fontSize : 12,
        backgroundColor : "transparent",
    }
});
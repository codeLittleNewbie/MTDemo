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


// 获取数据
var mineBean = require("../data/MineBean.json");

export default class HomeBar extends Component{
    static defaultProps = {
        option : {},
        topBar : mineBean.TopBar,
    };

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.outerStyle}>
                {/*上面*/}
                <View style={styles.leftViewStyle}>
                    {this.renderItems()}

                </View>
            </View>
        )
    }

    renderItems(){
        var items = [];

        console.log(this.props.option);

        for (var i = 0; i < this.props.topBar.length; i++) {
            var item = this.props.topBar[i];

            if (item.hasMsg){
               items.push(
                   <View key={i}
                         style={styles.iconViewStyle}>
                       <Image style={styles.topImageStyle}
                       source={{uri : item.icon}}>
                       </Image>

                       <View style={styles.msgStyle}>
                           <Text style={styles.textStyle}>
                               {item.msgNumber}
                           </Text>
                       </View>
                   </View>
               )
            }else {
                items.push(
                    <View key={i}
                          style={styles.iconViewStyle}>
                        <Image style={styles.topImageStyle}
                               source={{uri : item.icon}}>
                        </Image>
                    </View>
                )
            }
        }

        return items;

    }
}

const styles = StyleSheet.create({
    outerStyle : {
        height : 40,
        backgroundColor : "#06C1AE",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "flex-end",
    },
    leftViewStyle : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",

    },
    topImageStyle : {
        width : 22,
        height : 22,
    },
    iconViewStyle : {
        marginRight : 10,
        flexDirection : "row",
    },
    msgStyle : {
        width : 12,
        height : 14,
        backgroundColor : "red",
        borderRadius : 10,
        position : "absolute",
        top : -2,
        right : -3,
    },
    textStyle : {
        backgroundColor : "transparent",
        textAlign : "center",
        padding : 0,
        fontSize : 12,
    }
});
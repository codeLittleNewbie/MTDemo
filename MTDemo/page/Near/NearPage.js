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

var ScrollableTabView = require('react-native-scrollable-tab-view');
import All from "./TabPage/All";
import Food from "./TabPage/Food";
import Hotel from "./TabPage/Hotel";
import Play from "./TabPage/Play";


export default class NearPage extends Component{


    static defaultProps = {
        url : "http://47.93.30.78:8080/MeiTuan/near",
    };


    constructor(props){
        super(props);

        this.state = {
            foodItem : {},
            hotelItem : {},
            playItem : {},
            allItem : {},
            responseJson : null,
        }
    }

    /**
        // 下划线样式
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        // 背景颜色
        tabBarBackgroundColor="rgb(242,251,254)"
        // 选中文本颜色
        tabBarActiveTextColor="#FF4645"
        // 未被选中文本颜色
        tabBarInactiveTextColor="gray"
     */

    render(){

        // 数据未返回
        if (this.state.responseJson == null){
           return (
               <View style={styles.nearView}>
                   <NearBar option={option}/>
                   <View style={styles.loadingView}>

                       <Image style={styles.loadImage}
                              source={{uri : "refreshing_image_01"}}
                       >
                       </Image>
                       <Text>正在加载中...</Text>
                   </View>
               </View>

           )
        }else {
            return(
                <View style={styles.viewStyle}>
                    <NearBar option={option}/>
                    <ScrollableTabView
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                        tabBarBackgroundColor="rgb(242,251,254)"
                        tabBarActiveTextColor="#FF4645"
                        tabBarInactiveTextColor="gray"
                    >
                        <Food tabLabel="享美食" foodItem={this.state.foodItem}/>
                        <Hotel tabLabel="住酒店" hotelItem={this.state.hotelItem}/>
                        <Play tabLabel="爱玩" playItem={this.state.playItem}/>
                        <All tabLabel="全部" allItem={this.state.allItem}/>
                    </ScrollableTabView>
                </View>
            )
        }
    }

    componentDidMount() {
        // 发送网络请求
        fetch(this.props.url)
            .then((response) => response.json())
            .then((responseJson) => {
                // 因为返回值内没有判断是否成功返回的状态,就不判断了

                this.setState({
                    foodItem : responseJson.foodItem,
                    hotelItem : responseJson.hotelItem,
                    playItem : responseJson.playItem,
                    allItem : responseJson.allItem,
                    responseJson : responseJson,
                });

            })
            .catch((error) => {

            })
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        marginTop:20,
    },
    tabBarUnderlineStyle : {
        backgroundColor : "red",
        height : 1,
    },
    nearView : {
        marginTop : 20,
        flex : 1,
    },
    loadingView : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
    },
    loadImage : {
        height : 45,
        width : 45,
        marginRight : 10,
    }
});


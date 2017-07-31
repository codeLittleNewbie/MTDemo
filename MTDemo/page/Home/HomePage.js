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
    ScrollView
} from 'react-native';

import HomeBar from '../../components/HomeBar';
import HomeMenu from './HomeMenu';
import BoldLine from '../../components/BoldLine';
import HomeCategory from './HomeCategory';
import HomeLike from './HomeLike';

var Dimensions = require("Dimensions");
var windowWidth = Dimensions.get("window").width;

export default class HomePage extends Component{

    // http://47.93.30.78:8080/MeiTuan/home

    static defaultProps = {
        url : "http://47.93.30.78:8080/MeiTuan/home",
    };


    constructor(props) {
        super(props);
        this.state = {
            categorys: [],
            thridItems: [],
            fourItems: [],
            goods: [],
        }
    }


    render(){
        var categorys = this.state.categorys;
        var thridItems = this.state.thridItems;
        var fourItems = this.state.fourItems;
        var goods = this.state.goods;

        return(
            <View style={styles.viewStyle}>
                {/*首页导航栏*/}
                <HomeBar/>
                <ScrollView>
                    {/*首页菜单栏*/}
                    <HomeMenu option={categorys}/>
                    {/*分割线*/}
                    <BoldLine/>
                    {/*首页分类栏*/}
                    <HomeCategory option={thridItems}/>
                    <HomeCategory option={fourItems}/>
                    <BoldLine/>
                    <View style={styles.youLikeViewStyle}>
                        <Text style={styles.youLikeStyle}>-猜你喜欢-</Text>
                    </View>
                    {/*首页猜你喜欢*/}
                    <HomeLike option={goods}/>
                </ScrollView>
            </View>
        )
    }

    // 发送网络请求
    componentDidMount() {
        // 发送网络请求
        fetch(this.props.url)
            .then((response) => response.json())
            .then((responseJson) => {


                // 返回参数没有判断属性,就不判断是否成功获取数据了
                this.setState({
                    categorys: responseJson.categorys,
                    thridItems: responseJson.thridItems,
                    fourItems: responseJson.fourItems,
                    goods: responseJson.goods,
                })
            });
    }

}

const styles = StyleSheet.create({
    viewStyle:{
        flex : 1,
        marginTop:20,
    },
    youLikeViewStyle : {
        borderBottomWidth : 1,
        borderBottomColor : "#ccc",
    },
    youLikeStyle : {
        marginTop : 10,
        marginBottom : 10,
        width : windowWidth,
        alignItems : "center",
        justifyContent : "center",
        textAlign : "center",
    }
});
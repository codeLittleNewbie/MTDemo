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
    ScrollView,
} from 'react-native';


import ShopBar from '../../components/ShopBar';
import LightLine from '../../components/LightLine';
import OrderView from './OrderView';
import OrderItemBar from './OrderItemBar';
import OrderCategoryBar from './OrderCategoryBar';
import OrderCell from './OrderCell'

// 导入本地数据
var OrderPageBean = require('../../data/OrderPageBean.json');

import {
    SwRefreshScrollView, //支持下拉刷新的ScrollView
    SwRefreshListView, //支持下拉刷新和上拉加载的ListView
    RefreshStatus, //刷新状态 用于自定义下拉刷新视图时使用
    LoadMoreStatus //上拉加载状态 用于自定义上拉加载视图时使用
} from 'react-native-swRefresh'



var allItem = OrderItemBar.nearBeans;

var option = {
    leftName : "订单"
};

export default class OrderPage extends Component{

    static defaultProps = {
        url : "http://47.93.30.78:8080/MeiTuan/order"
    };



    constructor(props){
        super(props);

        this.state = {
            responseJson  : OrderPageBean,
        };

        _this = this;
    }

    render(){




        return(
            <View style={styles.viewStyle}>
                <ShopBar option={option}/>
                <LightLine/>

                <SwRefreshScrollView
                    onRefresh={this._onRefresh.bind(this)}>
                    <OrderView/>
                    <OrderItemBar orderbars={this.state.responseJson.orderbars}/>

                    <OrderCategoryBar name='最近订单'/>
                    <OrderCell allItem={this.state.responseJson.nearOrder}/>

                    <OrderCategoryBar name='浏览记录'/>
                    <OrderCell allItem={this.state.responseJson.nearBeans}/>

                </SwRefreshScrollView>
            </View>
        )
    }

    _onRefresh(end){
        fetch(_this.props.url)
            .then((response) => response.json())
            .then((responseJson) => {
                // 因为返回值内没有判断是否成功返回的状态,就不判断了

                _this.setState({
                    responseJson : responseJson,
                });

                end();

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

});



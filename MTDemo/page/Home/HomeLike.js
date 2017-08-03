/**
 * Created by W-Q on 2017/7/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView
} from 'react-native';

export default class HomeLike extends Component {



    static defaultProps = {
        option: [],
        url : "http://47.93.30.78:8080/MeiTuan/home",
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds,
        }
    }

    render() {


        if (this.props.option.length == 0){
           return (<View></View>)
        }
        //
        // console.log(this.props.option);
        //
        // // 给数据源赋值
        // this.setState({
        //     dataSource:this.state.dataSource.cloneWithRows(this.props.option),
        // });

        // 替换状态机
        this.state = {
            dataSource : this.state.dataSource.cloneWithRows(this.props.option)
        };

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowDate)=>this.renderItems(rowDate)}
                scrollEnabled={false}
            >

            </ListView>
        )
    }


    renderItems(rowDate) {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {alert(rowDate.storeName)}}
                style={styles.outerViewStyle}>
                <View style={styles.leftViewStyle}>
                    {/*icon*/}
                    <Image style={styles.iconStyle}
                           source={{uri: rowDate.icon}}>
                    </Image>
                </View>
                <View style={styles.rightViewStyle}>
                    {/*上*/}
                    <View style={styles.topViewStyle}>
                        <Text style={styles.storeName}>{rowDate.storeName}</Text>
                        <Text style={styles.distance}>{rowDate.distance}</Text>
                    </View>
                    {/*中*/}
                    <View style={styles.middleViewStyle}>
                        <Text style={styles.description}>{rowDate.descrption}</Text>
                    </View>
                    {/*下*/}
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.price}>&yen;{rowDate.price}</Text>
                        <Text style={styles.marketPrice}>门市价:&yen;{rowDate.marketPrice}</Text>
                        <Text style={styles.sales}>已销售{rowDate.sales}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }


    // 发送网络请求
    componentDidMount() {
        // 发送网络请求
        fetch(this.props.url)
            .then((response) => response.json())
            .then((responseJson) => {
                // 返回参数没有判断属性,就不判断是否成功获取数据了
                // 给数据源赋值
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.goods),
                });
            });
    }


}

const styles = StyleSheet.create({
    outerViewStyle: {
        flexDirection: "row",
        height : 100,
        borderBottomWidth : 1,
        borderBottomColor : "#ccc",
    },
    leftViewStyle: {
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
    },
    iconStyle: {
        width: 80,
        height: 80,
    },
    rightViewStyle: {
        flex: 2,
    },
    topViewStyle: {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    storeName : {
        fontSize : 14,
        marginTop : 15,
    },
    distance :{
        fontSize : 12,
        color : "#9d9d9d",
        marginTop : 15,
        marginRight : 10,
    },
    middleViewStyle: {
        flex : 1,
        justifyContent : "center",
    },
    description : {
        fontSize : 12,
        color : "#9d9d9d",
    },
    bottomViewStyle: {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    price : {
        color : "#06C1AE",
        fontSize : 15,
    },
    marketPrice : {
        fontSize : 12,
        color : "#9d9d9d",
        marginTop : 3,
    },
    sales : {
        fontSize : 12,
        color : "#9d9d9d",
        marginRight : 10,
        marginTop : 3,
    }


});
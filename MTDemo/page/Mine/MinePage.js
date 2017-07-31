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
    InteractionManager,
} from 'react-native';

import LightLine from '../../components/LightLine';
import BoldLine from '../../components/BoldLine'
import LoginPage from '../Login/LoginPage';

var Dimensions = require("Dimensions");
var windowWidth = Dimensions.get("window").width;


var mineBean = require("../../data/MineBean.json");

export default class MinePage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            items: mineBean.items,
            headerItem: mineBean.headerItem,
            TopBar: mineBean.TopBar,
        };

        //
        _this = this;
    }

    render() {

        return (
            <View style={styles.viewStyle}>
                {/*渲染头部*/}
                {this.renderHeader()}
                {/*渲染身体*/}
                {this.renderBody()}
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={styles.outerStyle}>
                {/*上面*/}
                <View style={styles.leftViewStyle}>
                    {this.renderItems()}
                </View>
            </View>
        )
    }

    renderBody() {
        return (
            <View>
                <TouchableOpacity style={styles.headerStyle}
                                  activeOpacity={0.8}
                                  onPress={() => this.loginView()}>
                    {/*头部左边*/}
                    <View style={styles.headerLeftStyle}>
                        <Image style={styles.userImageStyle}
                               source={{uri: this.state.headerItem.headerImage}}>
                        </Image>
                    </View>


                    {/*头部右边*/}
                    <View style={styles.headerRightStyle}>
                        {/*上部*/}
                        <View style={styles.loginViewStyle}>
                            <Text style={styles.loginStyle}>
                                {this.state.headerItem.userName}
                            </Text>
                            <Image style={styles.levelIconStyle}
                                   source={{uri: this.state.headerItem.leveImage}}>

                            </Image>
                        </View>

                        {/*底部*/}
                        <View style={styles.personalViewStyle}>
                            <Text style={styles.personalStyle}>
                                {this.state.headerItem.descrption}
                            </Text>
                            <Image style={styles.personalImageStyle}
                                   source={{uri: this.state.headerItem.leveImage2}}>
                            </Image>
                        </View>
                    </View>
                </TouchableOpacity>

                <ScrollView style={styles.scrollStyle}>
                    {this.renderCells()}
                </ScrollView>
            </View>
        )
    }

    renderCells() {

        var items = [];

        for (var i = 0; i < this.state.items.length; i++) {
            var item = this.state.items[i];
            items.push(
                <BoldLine key={"" + i}/>
            );
            for (var j = 0; j < item.length; j++) {
                items.push(
                    <View key={i + "" + j}
                          style={styles.cellStyle}>
                        <View style={styles.cellLeftStyle}>
                            <Image
                                style={styles.cellLeftImageStyle}
                                source={{uri: item[j].icon}}>
                            </Image>
                            <Text>{item[j].titleLeft}</Text>
                        </View>
                        <View style={styles.cellRightStyle}>
                            <Text>{item[j].titleRight}</Text>
                            <Image
                                style={styles.cellRightImageStyle}
                                source={{uri: "trip_travel__lion_more_date_icon"}}>
                            </Image>
                        </View>
                    </View>
                );

                items.push(
                    <LightLine key={j + " " + i}/>
                )
            }
        }

        return items;
    }

    renderItems() {
        var items = [];


        for (var i = 0; i < this.state.TopBar.length; i++) {
            var item = this.state.TopBar[i];

            if (item.hasMsg) {
                items.push(
                    <View key={i}
                          style={styles.iconViewStyle}>
                        <Image style={styles.topImageStyle}
                               source={{uri: item.icon}}>
                        </Image>

                        <View style={styles.msgStyle}>
                            <Text style={styles.textStyle}>
                                {item.msgNumber}
                            </Text>
                        </View>
                    </View>
                )
            } else {
                items.push(
                    <View key={i}
                          style={styles.iconViewStyle}>
                        <Image style={styles.topImageStyle}
                               source={{uri: item.icon}}>
                        </Image>
                    </View>
                )
            }
        }

        return items;

    }

    loginView() {
        // 当点击按钮的动画效果结束之后再跳转
        InteractionManager.runAfterInteractions(() => {


            this.props.navigator.push({
                component: LoginPage,
                params: {
                    getUserMsg(value){
                        _this.setState({
                            items: value.items,
                            headerItem: value.headerItem,
                            topBar: value.topBar,
                        })
                    }
                }
            })
        });


    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: "#ddd",
        marginTop: 20,
    },

    // 头部
    headerStyle: {
        height: 60,
        backgroundColor: "#06C1AE",

        flexDirection: "row",
        alignItems: "center",
    },
    headerLeftStyle: {
        width: 75,
        alignItems: "center",
    },
    userImageStyle: {
        width: 45,
        height: 45,
    },
    headerRightStyle: {
        flex: 1,
    },
    loginViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        marginTop: 5,
    },
    levelIconStyle: {
        width: 14,
        height: 14,
        marginLeft: 5,
    },
    loginStyle: {
        fontSize: 16,
        color: "white",
    },
    personalStyle: {
        color: "white",
        fontSize: 12,
    },
    personalImageStyle: {
        width: 10,
        height: 10,
        marginLeft: 5,
    },
    personalViewStyle: {
        flexDirection: "row",
        alignItems: "center",
    },


    // scrollView
    scrollStyle: {
        height : 500,
        width: windowWidth,
    },
    cellStyle: {
        flexDirection: "row",
        height: 30,
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    cellLeftStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    cellRightStyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    cellLeftImageStyle: {
        width: 18,
        height: 18,
        marginLeft: 10,
        marginRight: 10,
    },
    cellRightImageStyle: {
        width: 9,
        height: 9,
        marginLeft: 1,
        marginRight: 10,
    },
    outerStyle: {
        height: 40,
        backgroundColor: "#06C1AE",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    leftViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    topImageStyle: {
        width: 22,
        height: 22,
    },
    iconViewStyle: {
        marginRight: 10,
        flexDirection: "row",
    },
    msgStyle: {
        width: 12,
        height: 14,
        backgroundColor: "red",
        borderRadius: 10,
        position: "absolute",
        top: -2,
        right: -3,
    },
    textStyle: {
        backgroundColor: "transparent",
        textAlign: "center",
        padding: 0,
        fontSize: 12,
    }
});


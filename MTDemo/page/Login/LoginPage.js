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
    TextInput,
} from 'react-native';

import Toast from 'react-native-root-toast';

var Dimensions = require("Dimensions");

// 获取屏幕宽高
var widowHeight = Dimensions.get("window").height;
var widowWidth = Dimensions.get("window").width;

// 创建QQDemo组件
export default class QQDemo extends Component {
    /**
     * 渲染界面
     */

    constructor(props) {
        super(props);
        this.state = {
            passWord: "",
            userName: "",
        }
    }


    render() {
        return (
            // 主界面
            <View style={styles3.container}>
                {/*// 登录头像*/}
                <View style={styles3.iconView}>
                    <Image style={styles3.imageStyle}
                           source={{uri: "header_icon"}}>
                    </Image>
                </View>
                {/*// 登录框*/}
                <View style={styles3.inputStyle}>
                    <TextInput style={styles3.textInputStyle1}
                               underlineColorAndroid={"transparent"}
                               placeholder={"请输入用户名"}
                               onChangeText={(value) => this.getUserName(value)}>

                    </TextInput>
                    <TextInput style={styles3.textInputStyle2}
                               underlineColorAndroid={"transparent"}
                               placeholder={"输入密码"}
                               secureTextEntry={true}
                               onChangeText={(value) => this.updatePassWord(value)}>
                    </TextInput>
                </View>
                {/*登录按钮*/}
                <TouchableOpacity
                    style={styles3.logBtnView}
                    activeOpacity={0.5}
                    onPress={() => this.goBack()}>
                    <Text style={styles3.btnStyle}>登录</Text>
                </TouchableOpacity>
                {/*登录提示*/}
                <View style={styles3.loginTip}>
                    <Text style={{color: "rgb(96,158,241)", fontSize: 12}}>无法登录</Text>
                    <Text style={{color: "rgb(96,158,241)", fontSize: 12}}>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={styles3.otherStyle}>
                    <Text>其他登录方式</Text>
                    <Image
                        source={{uri: "share_ic_base_share_qq"}}
                        style={styles3.shareStyle}>

                    </Image>
                    <Image
                        source={{uri: "share_ic_base_share_sina_weibo"}}
                        style={styles3.shareStyle}>

                    </Image>
                    <Image
                        source={{uri: "share_ic_base_share_weixin"}}
                        style={styles3.shareStyle}>

                    </Image>
                </View>
            </View>
        )
    }

    goBack() {

        // 防止重复发送请求
        if (this.state.userName.length == 0 || this.state.passWord.length == 0){
            this.showToast("请输入用户名与密码");
            return;
        }

        fetch("http://47.93.30.78:8080/MeiTuan/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'username=' + this.state.userName + '&password=' + this.state.passWord,
        })
            .then((response) => response.json())
            .then((responseJson) => {


                if (responseJson.state = 200) {
                    // 判断账号密码是否正确
                    if (this.state.userName == "xiaomage" && this.state.passWord == "123456") {

                        this.props.getUserMsg(responseJson);

                        this.props.navigator.pop();
                    }
                    // 冒吐司
                    this.showToast(responseJson.result);
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    /**
     * 冒吐司
     * @param str
     */
    showToast(str) {
        // Add a Toast on screen.
        let toast = Toast.show(str, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
    }

    getUserName(value) {
        // 存储用户账号
        this.setState({
            userName: value,
        })
    }

    updatePassWord(value) {
        // 存储密码
        this.setState({
            passWord: value,
        })
    }
}

// 创建一个样式组件
const styles3 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
    },
    iconView: {
        // 子元素居中对齐
        justifyContent: "center",
        alignItems: "center",
        height: 1 / 4 * widowHeight,
    },
    imageStyle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginTop: 20
    },
    inputStyle: {
        marginTop: 10,
        height: 80,
        paddingRight: 10,
        paddingLeft: 10,
    },
    textInputStyle1: {
        backgroundColor: "white",
        height: 30,
        marginBottom: 10,
        padding: 0,
        borderRadius: 7,
        paddingLeft: 7
    },
    textInputStyle2: {
        backgroundColor: "white",
        height: 30,
        padding: 0,
        borderRadius: 7,
        paddingLeft: 7
    },
    logBtnView: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "skyblue",
        height: 30,
        borderRadius: 7
    },
    btnStyle: {
        fontSize: 14,
        color: "white",
        textAlign: "center",
    },
    loginTip: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    otherStyle: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        left: 10,
    },
    shareStyle: {
        width: 35,
        height: 35,
        marginLeft: 5,
    }
});

AppRegistry.registerComponent('ImageDemo', () => QQDemo);
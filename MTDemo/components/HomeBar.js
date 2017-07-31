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


export default class HomeBar extends Component{
    render(){
        return(
            <View style={styles.outerStyle}>
                {/*左边*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.leftViewStyle}
                    onPress={() => {console.log("广州")}}>
                    <Text style={styles.regionTextStyle}>
                        广州
                    </Text>
                    <Image style={styles.leftImageStyle}
                    source={{uri : "trip_train_vector_submit_order_head_arrow"}}
                    resizeMode={"contain"}>
                    </Image>
                </TouchableOpacity>


                {/*中间*/}
                <View style={styles.middleStyle}>
                    <Image style={styles.middleImageStyle}
                    source={{uri : "search_ic_suggestion_default"}}>
                    </Image>
                    <TextInput
                        style={styles.inputStyle}
                    placeholder={"糕点"}>
                    </TextInput>
                </View>


                {/*右边*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.rightStyle}
                    onPress={() => {console.log("扫码")}}>
                    <Image style={styles.rightImageStyle}
                           source={{uri : "scan"}}>
                    </Image>
                    <Text style={styles.regionTextStyle}>
                        扫码
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outerStyle : {
        height : 40,
        backgroundColor : "#06C1AE",
        flexDirection : "row",
        alignItems : "center",
    },
    leftViewStyle : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    regionTextStyle : {
        color : "white",
    },
    leftImageStyle : {
        width : 13,
        height : 9,
        marginLeft : 5,
    },

    middleStyle : {
        flex : 3,
        backgroundColor : "white",
        height : 30,
        borderRadius : 15,
        justifyContent : "center",
    },
    middleImageStyle : {
        width : 18,
        height : 18,
        position : "absolute",
        top : 7,
        left : 7,
    },
    inputStyle : {
        fontSize : 14,
        marginLeft : 30,
        flex : 1,
        padding : 0,
        paddingTop : 3,
    },
    rightStyle : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center"
    },

    rightImageStyle : {
        width : 19,
        height : 19,
        marginRight : 5,
    }
});
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
    static defaultProps = {
        option : {}
    };

    render(){
        return(
            <View style={styles.outerStyle}>
                {/*左边*/}
                <View
                    activeOpacity={0.5}
                    style={styles.leftViewStyle}
                    onPress={() => {console.log("广州")}}>
                    <Text style={styles.regionTextStyle}>
                        {this.props.option.leftName}
                    </Text>
                </View>
                {this.test()}
            </View>
        )
    }

    test(){
        console.log(this.props.option.leftName);
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
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    regionTextStyle : {
        color : "white",
        marginLeft : 10,
    },
});
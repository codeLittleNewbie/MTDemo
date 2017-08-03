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
    WebView,
} from 'react-native';

import ShopBar from '../../components/ShopBar';
import LightLine from '../../components/LightLine';

var option = {
    leftName : "逛一逛"
};

export default class ShopPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            url : "http://i.meituan.com/topic/scene/1?cevent=imt%2Fhomepage%2Fhomeguide4"
        }
    }



    render(){
        return(
            <View style={styles.viewStyle}>
                <ShopBar option={option}/>
                <LightLine/>
                <WebView
                    ref={"WEBVIEW_REF"}
                    automaticallyAdjustContentInsets={true}
                    style={{flex:1}}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:"green",
        marginTop:20,
    }
});
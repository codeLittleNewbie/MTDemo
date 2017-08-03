/**
 * Created by W-Q on 2017/8/2.
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
    RefreshControl,
} from 'react-native';

export default class ScrollViewDemo extends Component{

    state = {
        isRefreshing : true,
    }

    render(){
        return(
            <ScrollView
                style={styles.scrollViewStyle}
                onRefresh={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    >
                    </RefreshControl>
                }>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
                <Text>woshi wenzi </Text>
            </ScrollView>
        )
    }

    _onRefresh(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')

            end()//刷新成功后需要调用end结束刷新

        },1500)
    }
}


const styles = StyleSheet.create({
    scrollViewStyle : {
    }
})
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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


import {Navigator} from 'react-native-deprecated-custom-components'
import MainPage from './page/Main/MainPage';

export default class MTDemo extends Component {


    render() {
        return (
            <Navigator
                initialRoute={{name : "MainPage", component : MainPage}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;

                    return <Component {...this.params} navigator={navigator}/>
                }}
            />

        )
    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('MTDemo', () => MTDemo);

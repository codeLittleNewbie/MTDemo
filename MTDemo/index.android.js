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

import MainPage from './page/Main/MainPage'
import { Navigator } from 'react-native-deprecated-custom-components'

export default class MTDemo extends Component {



  render() {
    return (
        <Navigator
            initialRoute={{ name: "HomePage", component: MainPage }}
            configureScene={(route) => {
              return Navigator.SceneConfigs.FloatFromRight;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}
        />
    )
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('MTDemo', () => MTDemo);

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
} from 'react-native';


import HomePage from '../Home/HomePage';
import MinePage from '../Mine/MinePage';
import NearPage from '../Near/NearPage';
import OrderPage from '../Order/OrderPage';
import ShopPage from '../Shop/ShopPage';

import TabNavigator from 'react-native-tab-navigator';

export default class MainPage extends Component {


    static defaultProps = {

    };





    constructor(props) {
        super(props);

        this.state = {
            selected: "附近",
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="首页"

                    selectedTitleStyle={{color: "green"}}

                    renderIcon={() => <Image style={styles.imageStyle}
                                             source={{uri: "ic_vector_home_normal"}}>
                    </Image>}

                    renderSelectedIcon={() => <Image style={styles.imageStyle}
                                                     source={{uri: "ic_vector_home_pressed"}}>
                    </Image>}

                    selected={this.state.selected == "首页"}

                    onPress={() => this.setState({
                        selected: "首页"
                    })}
                >

                    <HomePage {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="附近"
                    selectedTitleStyle={{color: "green"}}
                    renderIcon={() => <Image style={styles.imageStyle}
                                             source={{uri: "ic_vector_nearby_normal"}}>

                    </Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle}
                                                     source={{uri: "ic_vector_nearby_pressed"}}>

                    </Image>}

                    selected={this.state.selected == "附近"}

                    onPress={() => this.setState({
                            selected: "附近"
                        }
                    )}
                >

                    <NearPage {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="逛一逛"
                    selectedTitleStyle={{color: "green"}}
                    renderIcon={() => <Image style={styles.imageStyle}
                                             source={{uri: "ic_vector_discover_normal"}}>

                    </Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle}
                                                     source={{uri: "ic_vector_discover_pressed"}}>

                    </Image>}

                    selected={this.state.selected == "逛一逛"}

                    onPress={() => this.setState({
                            selected: "逛一逛"
                        }
                    )}
                >

                    <ShopPage {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="订单"
                    selectedTitleStyle={{color: "green"}}
                    renderIcon={() => <Image style={styles.imageStyle}
                                             source={{uri: "ic_vector_order_normal"}}>

                    </Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle}
                                                     source={{uri: "ic_vector_order_pressed"}}>

                    </Image>}

                    selected={this.state.selected == "订单"}

                    onPress={() => this.setState({
                            selected: "订单"
                        }
                    )}
                >

                    <OrderPage {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selectedTitleStyle={{color: "green"}}
                    renderIcon={() => <Image style={styles.imageStyle}
                                             source={{uri: "ic_vector_mine_normal"}}>

                    </Image>}
                    renderSelectedIcon={() => <Image style={styles.imageStyle}
                                                     source={{uri: "ic_vector_mine_pressed"}}>

                    </Image>}

                    selected={this.state.selected == "我的"}

                    onPress={() => this.setState({
                            selected: "我的"
                        }
                    )}
                >

                    <MinePage {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}


const styles = StyleSheet.create({

    imageStyle: {
        width: 25,
        height: 25,
    }
});

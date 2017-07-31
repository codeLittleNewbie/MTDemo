/**
 * Created by W-Q on 2017/7/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


// 创建一个默认输出组件
export default class TabNavigatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: "首页"
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

                    <Text>

                    </Text>
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

                    <Text>

                    </Text>
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

                    <Text>

                    </Text>
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

                    <Text>

                    </Text>
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

                    <Text>

                    </Text>
                </TabNavigator.Item>
            </TabNavigator>



            /**
             <TabNavigator>
             <TabNavigator.Item
             selected={this.state.selectedTab === 'home'}
             title="Home"
             renderIcon={() => <Image source={...} />}
             renderSelectedIcon={() => <Image source={...} />}
             badgeText="1"
             onPress={() => this.setState({ selectedTab: 'home' })}>
             {homeView}
             </TabNavigator.Item>

             <TabNavigator.Item
             selected={this.state.selectedTab === 'profile'}
             title="Profile"
             renderIcon={() => <Image source={...} />}
             renderSelectedIcon={() => <Image source={...} />}
             renderBadge={() => <CustomBadgeView />}
             onPress={() => this.setState({ selectedTab: 'profile' })}>
             {profileView}
             </TabNavigator.Item>

             </TabNavigator>
             */

        )
    }
}

const styles = StyleSheet.create({

    imageStyle: {
        width: 30,
        height: 30
    }
});
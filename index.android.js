
import React, { Component } from 'react';
import {AppRegistry,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem =TabNavigator.Item;
const TAB_NORMAL_1=require('./1.png');  
const TAB_NORMAL_2=require('./1.png');  
const TAB_NORMAL_3=require('./1.png');  
const TAB_NORMAL_4=require('./1.png');  
  
const TAB_PRESS_1=require('./1.png');  
const TAB_PRESS_2=require('./1.png');  
const TAB_PRESS_3=require('./1.png');  
const TAB_PRESS_4=require('./1.png');    
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
       selectedTab:'Home'
    };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigatorItem
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={TAB_NORMAL_1} />}
          renderSelectedIcon={() => <Image source={TAB_NORMAL_1} />}
          badgeText="1"
          onPress={() => null}>
        </TabNavigatorItem>
        <TabNavigatorItem
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={TAB_NORMAL_1} />}
          renderSelectedIcon={() => <Image source={TAB_NORMAL_1} />}
          renderBadge={() => <Text >xxx</Text>}
          onPress={() => (null)}>
        </TabNavigatorItem>
      </TabNavigator>
    );
  }
}

AppRegistry.registerComponent('TabNavigator', () => App);

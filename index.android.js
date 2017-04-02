
import React, { Component } from 'react';
import {AppRegistry,Text,Image,StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
const TabNavigatorItem =TabNavigator.Item;
/**
 参数说明
 selected {boolean } 是否被选中
 selectedTitleStyle{{}} 被选中时标题字体样式
 title 字体内容 
 titleStyle 字体样式 {style}
 renderIcon 图标()=><Image /> or <Icon />
 renderSelectedIcon 被选中时图标 ()=><Image /> or <Icon />
 badgeText 角标内容
 onPress  被选中时触发的函数
 renderBadge 自定义角标()=>
 */
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
       selectedTab:'Home'
    };
  }
  
  render() {
    return (
      <TabNavigator  tabBarStyle={{backgroundColor:"#222"}}>
        <TabNavigatorItem
          title="电影"
          titleStyle={style.tabFont}
          selected={this.state.selectedTab === 'Home'}
          selectedTitleStyle={style.tabFontActive}  
          renderIcon={() => <Icon name="ios-film-outline" size={28} color="#aaa" />}
          renderSelectedIcon={() =><Icon name="ios-film" size={28} color="#fff"/>}
          onPress={() => this.setState({ selectedTab: 'Home' })} >
          <Text>电影</Text>
        </TabNavigatorItem>
        <TabNavigatorItem
          title="图书"
          titleStyle={style.tabFont}
          selected={this.state.selectedTab === 'work'}
          selectedTitleStyle={style.tabFontActive}  
          renderIcon={() => <Icon name="ios-book-outline" size={28} color="#aaa" />}
          renderSelectedIcon={() =><Icon name="ios-book" size={28} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'work' })}>
          <Text>图书</Text>
        </TabNavigatorItem>
        <TabNavigatorItem
          title="个人中心"
          titleStyle={style.tabFont}
          selected={this.state.selectedTab === 'person'}
          selectedTitleStyle={style.tabFontActive}  
          renderIcon={() => <Icon name="ios-person-outline" size={28} color="#aaa"/>}
          renderSelectedIcon={() =><Icon name="ios-person" size={28} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'person' })}>
          <Text>个人中心</Text>
        </TabNavigatorItem>
      </TabNavigator>
    );
  }
}

const style = StyleSheet.create({
  tabFont:{
    color:"#aaa",
    fontSize:12
  },
  tabFontActive:{
    color:"#FFF",
    fontSize:12
  },
});
AppRegistry.registerComponent('ReactTabBar', () => App);

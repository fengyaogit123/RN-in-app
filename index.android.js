
import React, { Component } from 'react';
import {AppRegistry,Text,Image,StyleSheet} from 'react-native';
import Movie from './view/movie';
import Book from './view/book';
import Person from './view/person';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
const TabNavigatorItem =TabNavigator.Item;
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
          <Movie /> 
        </TabNavigatorItem>
        <TabNavigatorItem
          title="图书"
          titleStyle={style.tabFont}
          selected={this.state.selectedTab === 'work'}
          selectedTitleStyle={style.tabFontActive}  
          renderIcon={() => <Icon name="ios-book-outline" size={28} color="#aaa" />}
          renderSelectedIcon={() =><Icon name="ios-book" size={28} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'work' })}>
          <Book />
        </TabNavigatorItem>
        <TabNavigatorItem
          title="个人中心"
          titleStyle={style.tabFont}
          selected={this.state.selectedTab === 'person'}
          selectedTitleStyle={style.tabFontActive}  
          renderIcon={() => <Icon name="ios-person-outline" size={28} color="#aaa"/>}
          renderSelectedIcon={() =><Icon name="ios-person" size={28} color="#fff" />}
          onPress={() => this.setState({ selectedTab: 'person' })}>
          <Person />
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

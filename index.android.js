
import React, { Component } from 'react';
import {Text,AppRegistry} from 'react-native';
import Tab from './view/tab';
import MovieDet from './view/movieDet';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Movie: { screen: Tab},
  MovieDet: {screen: MovieDet}
});
AppRegistry.registerComponent('ReactTabBar', () => App);

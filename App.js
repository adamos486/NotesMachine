/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Home from './Home';
import Docs from './Docs';

import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Docs: {screen: Docs},
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);

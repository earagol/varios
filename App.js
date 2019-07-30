/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
  Image
} from 'react-native';

import Routes from './src/Routes';


class App extends Component {
  

  render(){
    return (
        <Routes />
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});

export default App;

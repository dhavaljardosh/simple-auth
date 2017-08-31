import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp()({
    apiKey: 'AIzaSyBipdOcsrfO3ak8RXaV_xaLNGbCpedjGLo',
    authDomain: 'authentication-de57d.firebaseapp.com',
    databaseURL: 'https://authentication-de57d.firebaseio.com',
    projectId: 'authentication-de57d',
    storageBucket: 'authentication-de57d.appspot.com',
    messagingSenderId: '946899066268'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>
          App!
        </Text>
      </View>
    );
  }
}

export default App;

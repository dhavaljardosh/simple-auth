import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state={ loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBipdOcsrfO3ak8RXaV_xaLNGbCpedjGLo',
    authDomain: 'authentication-de57d.firebaseapp.com',
    databaseURL: 'https://authentication-de57d.firebaseio.com',
    projectId: 'authentication-de57d',
    storageBucket: 'authentication-de57d.appspot.com',
    messagingSenderId: '946899066268'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

  renderContent() {
    if (this.state.loggedIn) {
      return <Button>Log out</Button>;
    }
      return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

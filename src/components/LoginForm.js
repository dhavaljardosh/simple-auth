import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common/index';

class LoginForm extends Component {

  state={ email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
              <Input
                label="Email"
                value={this.state.email}
                placeholder="user@gmail.com"
                onChangeText={email => this.setState({ email })}
              />
          </CardSection>

          <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log In
            </Button>
          </CardSection>

        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    fontWeight: '500'
  }
};

export default LoginForm;

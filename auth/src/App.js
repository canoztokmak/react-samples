import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    logged: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtb8Yo6Me7dwV9aPYE-id8wg5_m5PDl7g',
      authDomain: 'authentication-35e06.firebaseapp.com',
      databaseURL: 'https://authentication-35e06.firebaseio.com',
      projectId: 'authentication-35e06',
      storageBucket: 'authentication-35e06.appspot.com',
      messagingSenderId: '736314903485'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logged: true });
      } else {
        this.setState({ logged: false });
      }
    });
  }

  renderContent() {
    switch (this.state.logged) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Logout
          </Button>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

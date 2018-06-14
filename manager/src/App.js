import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBjgOh6WE48FL4Tb2ORMnyXVfY7PS_kJ2E',
      authDomain: 'manager-f5206.firebaseapp.com',
      databaseURL: 'https://manager-f5206.firebaseio.com',
      projectId: 'manager-f5206',
      storageBucket: 'manager-f5206.appspot.com',
      messagingSenderId: '861011063430'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

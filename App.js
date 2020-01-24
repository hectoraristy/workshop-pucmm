/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import { Provider } from 'react-redux'
import store from './src/store';

import Navigation from './src/screens/home';

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
};

export default App;

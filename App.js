/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';


import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Redux from './src/store';

import Navigation from './src/screens/home';

class App extends Component {
 
  render() {
    return (
      <Provider store={Redux.store}>
        <PersistGate loading={null} persistor={Redux.persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
};

export default App;

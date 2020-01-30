import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,applyMiddleware(logger));

const persistor = persistStore(store);

export default { store, persistor };

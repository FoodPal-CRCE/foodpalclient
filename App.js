import React from 'react';
import {View, Text} from 'react-native';
import Login from './app/screens/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
// import Signup from './app/screens/signup';
import AuthNavigator from './app/navigator/authNavigator';
import {Provider} from 'react-redux';
//import { createStore } from "redux";
import authReducer from './app/reducers/authReducer';
import store from './app/utils/store';

export default function App() {
  //const store = createStore(authReducer);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}

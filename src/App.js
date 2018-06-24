/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppNavigator} from './navigation/index';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import polls from './reducers/pollRests';


type Props = {};

let store = createStore(polls, applyMiddleware(thunk))


export default class App extends Component<Props> {
  render() {
    return (
    <Provider store={store}>
     <AppNavigator/>
    </Provider>
    );
  }
}

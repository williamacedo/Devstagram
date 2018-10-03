import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Preload from './src/screens/Preload';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Tabs from './src/screens/Tabs';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({
  Preload:{
    screen:Preload
  },
  Tabs:{
    screen:Tabs
  },
  Home:{
    screen:Home
  },
  Login:{
    screen:Login
  },
  SignUp:{
    screen:SignUp
  }
},{
  navigationOptions:{
    header:null
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
// import React from 'react'
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import the different screens
import Loading from './src/screens/Loading';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
// create our app's navigation stack
const AppNavigator = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
  },
  {
    initialRouteName: 'Loading',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

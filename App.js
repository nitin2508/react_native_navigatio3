// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator ,createSwitchNavigator} from "react-navigation";
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register:{
    screen:RegisterScreen
  }
});

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "HOME",
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: "SETTINGS",
    }
  }
});


const SwitchNavigator = createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
    Auth:AuthStack,
    App:AppTabNavigator
})

export default createAppContainer(SwitchNavigator);
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import {createStackNavigator,createAppContainer} from 'react-navigation';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const AppStackNavigator = createStackNavigator({
//   Login:LoginScreen,
//   HomeScreen:HomeScreen
// })
// // export default class App extends Component{
// //   render() {
// //     return (
// //       <AppStackNavigator/>
// //     );
// //   }
// // }
// const App = createAppContainer(<AppStackNavigator/>)
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

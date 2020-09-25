import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTab from './TabNavigation';

export default function App() {
  return (
      <MyTab />
  );
}
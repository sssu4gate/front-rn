import * as React from 'react';
import { View, Text , Button, ScrollView, Image} from 'react-native';
import {
  NavigationContainer,
  useScrollToTop,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Home(){
  const ref = React.useRef(null);

  useScrollToTop(ref);
    return (
      <>

      <ScrollView ref={ref}>
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="1"
      />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="2"
      />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="3"
      />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 400, height: 400 }}
        key="4"
      />
    </ScrollView>
    </>
      );
}
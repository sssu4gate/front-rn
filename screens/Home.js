import * as React from 'react';
import { View, Text , Button, ScrollView, Image} from 'react-native';
import {
  NavigationContainer,
  useScrollToTop,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Callender from "../assets/images/Calendar";
import Check from "../assets/images/Check";
import CheckFull from "../assets/images/CheckFull";
import Filter from "../assets/images/Filter";
import Heart from "../assets/images/Heart";
import HeartFull from "../assets/images/HeartFull";
import Photo from "../assets/images/Photo";
import Search from "../assets/images/Search";
import Title from "../assets/images/Title";


export default function Home(){
  const ref = React.useRef(null);

  useScrollToTop(ref);
    return (
      <>

      <ScrollView ref={ref}>
      <Callender />
      <Check />
      <CheckFull />
      <Filter length="14"/>
      <Heart />
      <HeartFull />
      <Photo />
      <Search length="14"/>
      <Title />
    </ScrollView>
    </>
      );
}
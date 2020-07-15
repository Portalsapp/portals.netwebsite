import React from 'react'
import { View, Text } from 'react-native'

import PortalsScreen from '../screens/portals/PortalsScreenContainer'
import DiscoverScreen from '../screens/discover/DiscoverScreen'
import ShopScreen from '../screens/shop/ShopScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MainTabNavigatorParamList } from '../../types'

const MainTabNavigator = createBottomTabNavigator<MainTabNavigatorParamList>();

export default function MobileMainTabNavigator() {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen component={ShopScreen} name='Shop' />
      <MainTabNavigator.Screen component={PortalsScreen} name='Portals' />
      <MainTabNavigator.Screen component={DiscoverScreen} name='Discover' />
    </MainTabNavigator.Navigator>
  );
}

import React from 'react'
import { View, Text } from 'react-native'

import PortalsScreen from '../screens/portals/PortalsScreenContainer'
import DiscoverScreen from '../screens/discover/DiscoverScreen'
import ShopScreen from '../screens/shop/ShopScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MainTabNavigatorParamList, PortalsStackParamList, StuffStackParamList, DiscoverStackParamList, ShopStackParamList } from '../../types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen'
import { Ionicons } from '@expo/vector-icons';
import client, { getUserPortalConnections } from '../../functions/AWSFunctions'
import gql from 'graphql-tag'
import { UserData, Portal } from '../reducers/types'
import * as subscriptions from '../graphql/subscriptions'


const MainTabNavigator = createBottomTabNavigator<MainTabNavigatorParamList>();
const PortalStack = createStackNavigator<PortalsStackParamList>();
const ShopStack = createStackNavigator<ShopStackParamList>();
const DiscoverStack = createStackNavigator<DiscoverStackParamList>();

type Props = {
  userData: UserData;
  setUserData: (userData: UserData) => void,
  setPortals: (portals: Portal[]) => void,
}

export default function MobileMainTabNavigator(props: Props) {
  React.useEffect(() => {
    // Do something when the screen is focused
    const subscription = client
      .subscribe({
        query: gql(subscriptions.onUpdateAmplifyDataStoreUserMetadata),
        variables: {
          ds_pk: 'USER#' + props.userData.username,
          ds_sk: '#METADATA#' + props.userData.username,
        },
      })
      .subscribe({
        next: ({ data }) => {
          const result = data.onUpdateAmplifyDataStoreUserMetadata;
          props.setUserData({
            ...props.userData,
            displayName: result.displayName,
            pic: result.pic,
          });
        },
        error: (error) => {
          console.log('userDataSubscription Error:', error);
        },
      });

    // Update the user's portals
    updateUserPortals();
    return () => {
      // Do something when the screen is unfocused
      // Useful for cleanup functions
      /*@ts-ignore */
      // subscription.unsubscribe();
      console.log('unsub');
      subscription.unsubscribe();
    };
  }, []);

  const updateUserPortals = async () => {
    const portalConnections = await getUserPortalConnections(
      props.userData.username
    );
    props.setPortals(portalConnections);
  };
  return (
    <MainTabNavigator.Navigator
      initialRouteName="Portals"
    >
      <MainTabNavigator.Screen
        name='Shop'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='ios-briefcase'
              color={color}
            />
          ),
        }}
      >
        {({ navigation }: StackScreenProps<ShopStackParamList>) => (
          <ShopStack.Navigator>
            <ShopStack.Screen name='Shop' component={ShopScreen} />
          </ShopStack.Navigator>
        )}
      </MainTabNavigator.Screen>
      <MainTabNavigator.Screen
        name='Portals'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='ios-egg'
              color={color}
            />
          ),
        }}
      >
        {({ navigation }: StackScreenProps<PortalsStackParamList>) => (
          <PortalStack.Navigator>
            <PortalStack.Screen
              name='Portals'
              component={PortalsScreen}
              options={{
                headerLeft: () => <Text>USER</Text>,
                headerTitle: () => null,
                headerRight: () => <Text>CART</Text>,
              }}
            />
            <PortalStack.Screen name='Select' component={PortalSelectScreen} />
          </PortalStack.Navigator>
        )}
      </MainTabNavigator.Screen>
      <MainTabNavigator.Screen
        name='Discover'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='ios-people'
              color={color}
            />
          ),
        }}
      >
        {({ navigation }: StackScreenProps<DiscoverStackParamList>) => (
          <DiscoverStack.Navigator>
            <DiscoverStack.Screen
              name='Discover'
              component={DiscoverScreen}
              options={{
                headerShown: false,
              }}
            />
          </DiscoverStack.Navigator>
        )}
      </MainTabNavigator.Screen>
    </MainTabNavigator.Navigator>
  );
}

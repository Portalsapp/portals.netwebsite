import React from 'react'
import { View, Text } from 'react-native'

import PortalsScreen from '../screens/portals/PortalsScreenContainer'
import AddPortalScreen from '../screens/add_portal/AddPortalContainer'
import DiscoverScreen from '../screens/discover/DiscoverScreen'
import ShopScreen from '../screens/shop/ShopScreenContainer'
import InitiateTradeScreen from '../screens/initiate_trade/InitiateTradeContainer'
import TradingScreen from '../screens/trade/TradingContainer'
import TradeHistoryScreen from '../screens/trade_history/TradeHistoryScreenContainer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MainTabNavigatorParamList, PortalsStackParamList, StuffStackParamList, DiscoverStackParamList, ShopStackParamList } from '../../types'
import { createStackNavigator, StackScreenProps, TransitionPresets } from '@react-navigation/stack'
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen'
import { Ionicons } from '@expo/vector-icons';
import client, { getUserPortalConnections, getUserItems } from '../../functions/AWSFunctions'
import gql from 'graphql-tag'
import { UserData, Portal, VirtualItem } from '../reducers/types'
import * as subscriptions from '../graphql/subscriptions'


const MainTabNavigator = createBottomTabNavigator<MainTabNavigatorParamList>();
const PortalStack = createStackNavigator<PortalsStackParamList>();
const ShopStack = createStackNavigator<ShopStackParamList>();
const DiscoverStack = createStackNavigator<DiscoverStackParamList>();

type Props = {
  userData: UserData,
  items: VirtualItem[],
  setUserData: (userData: UserData) => void,
  setPortals: (portals: Portal[]) => void,
  setUserItems: (items: VirtualItem[]) => void,
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
    // Update the user's virtual items
    updateUserItems();
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

  const updateUserItems = async () => {
    const items = await getUserItems(props.userData.username);
    console.log('items', items);
    props.setUserItems(items);
  }

  return (
    <MainTabNavigator.Navigator initialRouteName='Portals'>
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
            <ShopStack.Screen
              name='Shop'
              component={ShopScreen}
              options={{
                headerLeft: () => <Text>BANK</Text>,
                headerTitle: () => null,
                headerRight: () => <Text>QR</Text>,
              }}
            />
            <ShopStack.Screen
              name='InitiateTrade'
              component={InitiateTradeScreen}
              options={{
                headerShown: false,
              }}
            />
            <ShopStack.Screen name='Trade' component={TradingScreen} />
            <ShopStack.Screen
              name='History'
              component={TradeHistoryScreen}
              options={{
                ...TransitionPresets.ModalPresentationIOS,
                headerShown: false,
              }}
            />
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
                headerLeft: () => <Text>{props.userData.displayName}</Text>,
                headerTitle: () => null,
                headerRight: () => <Text>CART</Text>,
              }}
            />
            <PortalStack.Screen name='Select' component={PortalSelectScreen} />
            <PortalStack.Screen
              name='AddPortal'
              component={AddPortalScreen}
              options={{
                headerShown: false,
              }}
            />
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

import React from 'react';
import { View, Text } from 'react-native';

import PortalsScreen from '../screens/portals/PortalsScreenContainer';
import AddPortalScreen from '../screens/add_portal/AddPortalContainer';
import DiscoverScreen from '../screens/discover/DiscoverScreenContainer';
import ShopScreen from '../screens/shop/ShopScreenContainer';
import CartScreen from '../screens/cart/CartScreenContainer';
import PublisherScreen from '../screens/publisher/PublisherScreenContainer';
import InitiateTradeScreen from '../screens/initiate_trade/InitiateTradeContainer';
import TradingScreen from '../screens/trade/TradingContainer';
import TradeHistoryScreen from '../screens/trade_history/TradeHistoryScreenContainer';
import SettingsScreen from '../screens/settings/SettingsScreenContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  MainTabNavigatorParamList,
  PortalsStackParamList,
  StuffStackParamList,
  DiscoverStackParamList,
  ShopStackParamList,
  MainStackNavigatorParamList,
  PublisherStackParamList,
} from '../../types';
import {
  createStackNavigator,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/stack';
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen';
import { Ionicons } from '@expo/vector-icons';
import client, {
  getUserPortalConnections,
  getUserItems,
  getBankItems,
} from '../../functions/AWSFunctions';
import gql from 'graphql-tag';
import { UserData, Portal, VirtualItem, BankHistory } from '../reducers/types';
import * as subscriptions from '../graphql/subscriptions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainStackNavigator = createStackNavigator<MainStackNavigatorParamList>();
const MainTabNavigator = createBottomTabNavigator<MainTabNavigatorParamList>();
const PortalStack = createStackNavigator<PortalsStackParamList>();
const ShopStack = createStackNavigator<ShopStackParamList>();
const DiscoverStack = createStackNavigator<DiscoverStackParamList>();
const PublisherStack = createStackNavigator<PublisherStackParamList>();

type Props = {
  userData: UserData;
  items: VirtualItem[];
  setUserData: (userData: UserData) => void;
  setPortals: (portals: Portal[]) => void;
  setUserItems: (items: VirtualItem[]) => void;
  setUserBankHistory: (bankHistory: BankHistory[]) => void;
  setUserTradeHistory: (tradeHistory: BankHistory[]) => void;
};

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
    // Get users transaction history
    getBankHistory();
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
    props.setUserItems(items);
  };

  const getBankHistory = async () => {
    const items: BankHistory[] = await getBankItems(props.userData.username);
    console.log(items);
    props.setUserTradeHistory(items.filter((element) => element.transferType === "TRADE"));
    props.setUserBankHistory(items);
  }

  return (
    <MainStackNavigator.Navigator mode='modal'>
      <MainStackNavigator.Screen
        name='Tabs'
        options={{
          headerShown: false,
        }}
      >
        {({ navigation }: StackScreenProps<MainTabNavigatorParamList>) => (
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
                      headerLeft: () => (
                        <Text
                          style={{
                            fontSize: 24,
                            fontFamily: 'OpenSans_300Light',
                            marginLeft: 20,
                          }}
                        >
                          Bank
                        </Text>
                      ),
                      headerTitle: () => null,
                      headerRight: () => (
                        <TouchableOpacity
                          onPress={() => null}
                          style={{ marginRight: 20 }}
                        >
                          <Ionicons
                            size={40}
                            name='ios-qr-scanner'
                            color={'#a4a4a4'}
                          />
                        </TouchableOpacity>
                      ),
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
                      headerLeft: () => (
                        <Text
                          style={{
                            fontSize: 24,
                            fontFamily: 'OpenSans_300Light',
                            marginLeft: 20,
                          }}
                        >
                          History
                        </Text>
                      ),
                      headerTitle: () => null,
                      headerRight: () => (
                        <TouchableOpacity
                          onPress={() => navigation.pop()}
                          style={{ marginRight: 20 }}
                        >
                          <Ionicons
                            size={50}
                            name='ios-close'
                            color={'#a4a4a4'}
                          />
                        </TouchableOpacity>
                      ),
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
              {({
                navigation,
              }: StackScreenProps<MainStackNavigatorParamList>) => (
                <PortalStack.Navigator>
                  <PortalStack.Screen
                    name='Portals'
                    component={PortalsScreen}
                    options={{
                      headerLeft: () => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Settings')}
                          style={{ marginLeft: 20 }}
                        >
                          <Ionicons
                            size={40}
                            name='ios-contact'
                            color={'#a4a4a4'}
                          />
                        </TouchableOpacity>
                      ),
                      headerTitle: () => (
                        <Text
                          style={{
                            fontSize: 24,
                            fontFamily: 'OpenSans_300Light',
                          }}
                        >
                          Portals
                        </Text>
                      ),
                      headerRight: () => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Cart')}
                          style={{ marginRight: 20 }}
                        >
                          <Ionicons
                            size={40}
                            name='ios-cart'
                            color={'#a4a4a4'}
                          />
                        </TouchableOpacity>
                      ),
                    }}
                  />
                  <PortalStack.Screen
                    name='Select'
                    component={PortalSelectScreen}
                  />
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
              {({
                navigation,
              }: StackScreenProps<MainStackNavigatorParamList>) => (
                <DiscoverStack.Navigator>
                  <DiscoverStack.Screen
                    name='Discover'
                    component={DiscoverScreen}
                    options={{
                      headerLeft: () => (
                        <Text
                          style={{
                            fontSize: 24,
                            fontFamily: 'OpenSans_300Light',
                            marginLeft: 20,
                          }}
                        >
                          Discover
                        </Text>
                      ),
                      headerTitle: () => null,
                      headerRight: () => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Cart')}
                          style={{ marginRight: 20 }}
                        >
                          <Ionicons
                            size={40}
                            name='ios-cart'
                            color={'#a4a4a4'}
                          />
                        </TouchableOpacity>
                      ),
                    }}
                  />
                </DiscoverStack.Navigator>
              )}
            </MainTabNavigator.Screen>
            {true && (
              <MainTabNavigator.Screen
                name='Publisher'
                options={{
                  tabBarIcon: ({ color }) => (
                    <Ionicons
                      size={30}
                      style={{ marginBottom: -3 }}
                      name='ios-hammer'
                      color={color}
                    />
                  ),
                }}
              >
                {({
                  navigation,
                }: StackScreenProps<MainStackNavigatorParamList>) => (
                  <PublisherStack.Navigator>
                    <PublisherStack.Screen
                      name='Publisher'
                      component={PublisherScreen}
                      options={{
                        headerLeft: () => (
                          <Text
                            style={{
                              fontSize: 24,
                              fontFamily: 'OpenSans_300Light',
                              marginLeft: 20,
                            }}
                          >
                            Publisher
                          </Text>
                        ),
                        headerTitle: () => null,
                        headerRight: () => null,
                      }}
                    />
                  </PublisherStack.Navigator>
                )}
              </MainTabNavigator.Screen>
            )}
          </MainTabNavigator.Navigator>
        )}
      </MainStackNavigator.Screen>
      <MainStackNavigator.Screen name='Settings' component={SettingsScreen} />
      <MainStackNavigator.Screen name='Cart' component={CartScreen} />
    </MainStackNavigator.Navigator>
  );
}

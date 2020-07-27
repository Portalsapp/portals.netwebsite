import React from 'react';

// Screens
import MobileTabNavigator from './MobileTabNavigatorContainer';
import SettingsScreen from '../screens/settings/SettingsScreenContainer';
import InitiateTradeSceen from '../screens/initiate_trade/InitiateTradeContainer';
import TradeSceen from '../screens/trade/TradingContainer';
import CartScreen from '../screens/cart/CartScreenContainer';

import {
  MainStackNavigatorParamList, TradeModalStackParamList,
} from '../../types';
import {
  createStackNavigator, StackScreenProps,
} from '@react-navigation/stack';
import client, {
  getUserPortalConnections,
  getUserItems,
  getBankItems,
} from '../../functions/AWSFunctions';
import gql from 'graphql-tag';
import { UserData, Portal, VirtualItem, BankHistory } from '../reducers/types';
import * as subscriptions from '../graphql/subscriptions';

const MainStackNavigator = createStackNavigator<MainStackNavigatorParamList>();
const TradeModalStack = createStackNavigator<TradeModalStackParamList>();

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
    props.setUserTradeHistory(
      items.filter((element) => element.transferType === 'TRADE')
    );
    props.setUserBankHistory(items);
  };

  return (
    <MainStackNavigator.Navigator mode='modal'>
      <MainStackNavigator.Screen
        name='MobileTabs'
        options={{
          headerShown: false,
        }}
        component={MobileTabNavigator}
      />
      <MainStackNavigator.Screen
        name='ProfileModal'
        component={SettingsScreen}
      />
      <MainStackNavigator.Screen name='CartModal' component={CartScreen} />
      <MainStackNavigator.Screen
        name='TradeModal'
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        {({ navigation }: StackScreenProps<MainStackNavigatorParamList>) => (
          <TradeModalStack.Navigator>
            <TradeModalStack.Screen
              name='InitiateTrade'
              component={InitiateTradeSceen}
              options={{
                headerShown: false,
              }}
            />
            <TradeModalStack.Screen
              name='Trade'
              component={TradeSceen}
              options={{
                gestureEnabled: false,
                headerShown: false,
              }}
            />
          </TradeModalStack.Navigator>
        )}
      </MainStackNavigator.Screen>
    </MainStackNavigator.Navigator>
  );
}

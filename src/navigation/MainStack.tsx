import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import PortalsScreen from '../screens/portals/PortalsScreenContainer';
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen';
import StuffScreen from '../screens/stuff/StuffScreen';
import DiscoverScreen from '../screens/discover/DiscoverScreen';
import SettingsScreen from '../screens/settings/SettingsScreenContainer';
import DrawerContent from '../components/drawer_content/DrawerContentContainer';
import TradingScreen from '../screens/trade/TradingScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import PublisherScreen from '../screens/publisher/PublisherScreenContainer';
import CreatePortalScreen from '../screens/create_portal/CreatePortalScreenContainer';
import ManagePortalScreen from '../screens/manage_portal/ManagePortalScreenContainer';

import { Platform, ColorSchemeName, Modal } from 'react-native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';


import {
  RootStackParamList,
  RootDrawerParamList,
  PortalsStackParamList,
  StuffStackParamList,
  DiscoverStackParamList,
  SettingsStackParamList,
  ShopStackParamList,
  PublisherStackParamList,
} from '../../types';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const RootStack = createStackNavigator<RootStackParamList>();
const PortalStack = createStackNavigator<PortalsStackParamList>();
const StuffStack = createStackNavigator<StuffStackParamList>();
const DiscoverStack = createStackNavigator<DiscoverStackParamList>();
const SettingsStack = createStackNavigator<SettingsStackParamList>();
const ShopStack = createStackNavigator<ShopStackParamList>();
const PublisherStack = createStackNavigator<PublisherStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name='Main'>
        {({ navigation }: StackScreenProps<RootStackParamList>) => (
          <Drawer.Navigator
            drawerType={'permanent'}
            initialRouteName='Portals'
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen
              name='Portals'
              options={{
                title: 'Portals',
              }}
            >
              {({ navigation }: DrawerScreenProps<RootDrawerParamList>) => (
                <PortalStack.Navigator>
                  <PortalStack.Screen
                    name='Portals'
                    component={PortalsScreen}
                    options={{ headerShown: false }}
                  />
                  <PortalStack.Screen
                    name='Select'
                    component={PortalSelectScreen}
                    options={{ headerTitle: 'Select' }}
                  />
                </PortalStack.Navigator>
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name='Stuff'
              options={{
                title: 'Stuff',
              }}
            >
              {({ navigation }: DrawerScreenProps<RootDrawerParamList>) => (
                <StuffStack.Navigator>
                  <StuffStack.Screen
                    name='Stuff'
                    component={StuffScreen}
                    options={{ headerShown: false }}
                  />
                  <StuffStack.Screen
                    name='Trade'
                    component={TradingScreen}
                    options={{ headerShown: false }}
                  />
                </StuffStack.Navigator>
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name='Discover'
              options={{
                title: 'Discover',
              }}
            >
              {({ navigation }: DrawerScreenProps<RootDrawerParamList>) => (
                <DiscoverStack.Navigator>
                  <DiscoverStack.Screen
                    name='Discover'
                    component={DiscoverScreen}
                    options={{ headerShown: false }}
                  />
                </DiscoverStack.Navigator>
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name='Shop'
              options={{
                title: 'Shop',
              }}
            >
              {({ navigation }: DrawerScreenProps<RootDrawerParamList>) => (
                <ShopStack.Navigator>
                  <ShopStack.Screen name='Shop' component={ShopScreen} />
                </ShopStack.Navigator>
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name='Publisher'
              options={{
                title: 'Publisher',
              }}
            >
              {({ navigation }: DrawerScreenProps<RootDrawerParamList>) => (
                <PublisherStack.Navigator>
                  <PublisherStack.Screen
                    name='Publisher'
                    component={PublisherScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <PublisherStack.Screen
                    name='CreatePortal'
                    component={CreatePortalScreen}
                    options={{}}
                  />
                  <PublisherStack.Screen
                    name='ManagePortal'
                    component={ManagePortalScreen}
                    options={{}}
                  />
                </PublisherStack.Navigator>
              )}
            </Drawer.Screen>
            <Drawer.Screen
              name='Settings'
              options={{
                title: 'Settings',
              }}
            >
              {({ navigation }: DrawerScreenProps<RootDrawerParamList>) => (
                <SettingsStack.Navigator>
                  <SettingsStack.Screen
                    name='Settings'
                    component={SettingsScreen}
                  />
                </SettingsStack.Navigator>
              )}
            </Drawer.Screen>
          </Drawer.Navigator>
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}

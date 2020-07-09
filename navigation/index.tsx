import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, ColorSchemeName, Modal } from 'react-native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import NotFoundScreen from '../screens/NotFoundScreen';
import {
  RootStackParamList,
  RootDrawerParamList,
  PortalsStackParamList,
  StuffStackParamList,
  DiscoverStackParamList,
  SettingsStackParamList,
  TradeStackParamList,
  ShopStackParamList,
  AuthStackParamList
} from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import WebStackNavigator from './WebStackNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabbedScreen from '../screens/main_tabbed/MainTabbedScreen';
import PortalsScreen from '../screens/portals/PortalsScreen';
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen'
import StuffScreen from '../screens/stuff/StuffScreen'
import DiscoverScreen from '../screens/discover/DiscoverScreen'
import SettingsScreen from '../screens/settings/SettingsScreen'
import DrawerContent from '../components/drawer_content/DrawerContent'
import LoginScreen from '../screens/login/LoginScreenContainer'
import TradingScreen from '../screens/trade/TradingScreen'
import ShopScreen from '../screens/shop/ShopScreen'
import PortalsModal from '../components/modal/PortalsModalContainer'
import ModalScreen from '../screens/modal_screen/ModalScreen'
import CreateAccountScreen from '../screens/create_account/CreateAccountScreenContainer'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
type Props = {
  colorScheme: ColorSchemeName,
  signedIn: boolean,
}

// export default function Navigation({ colorScheme, } : { colorScheme: ColorSchemeName;}, signedIn: boolean) {
export default function Navigation(props : Props) {
  if (props.signedIn) {
    
  }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {/* <PortalsModal /> */}
      {props.signedIn === true ? (
        <RootNavigator />)
        : (<LoginNavigator />
      )}
    </NavigationContainer>
  );
}

const AuthStack = createStackNavigator<AuthStackParamList>();

function LoginNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const RootStack = createStackNavigator<RootStackParamList>();
const PortalStack = createStackNavigator<PortalsStackParamList>();
const StuffStack = createStackNavigator<StuffStackParamList>();
const DiscoverStack = createStackNavigator<DiscoverStackParamList>();
const SettingsStack = createStackNavigator<SettingsStackParamList>();
const ShopStack = createStackNavigator<ShopStackParamList>();


function RootNavigator() {
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
          {/* <Drawer.Screen
        name='NotFound'
        options={{
          title: 'Not Found!',
        }}
        component={NotFoundScreen}
      /> */}
        </Drawer.Navigator>)}
      </RootStack.Screen>
      <RootStack.Screen
        name='Modal'
        component={ModalScreen}
      />
    </RootStack.Navigator>
  );
}

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
  ShopStackParamList,
  AuthStackParamList,
  PublisherStackParamList, WebStackParamList
} from '../../types';
import LoginScreen from '../screens/login/LoginScreenContainer'
import CreateAccountScreen from '../screens/create_account/CreateAccountScreenContainer'
import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './MainStackContainer'
import MainStackNavigator from './MainStackNavigatorContainer';
import { Portal } from '../reducers/types';
import TemporaryLanding from '../screens/temporary_page/TemporaryLanding';
import PrivacyScreen from '../screens/privacy/PrivacyScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
type Props = {
  colorScheme: ColorSchemeName,
  signedIn: boolean,
}

const WebStack = createStackNavigator<WebStackParamList>();

// export default function Navigation({ colorScheme, } : { colorScheme: ColorSchemeName;}, signedIn: boolean) {
export default function Navigation(props : Props) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      theme={DefaultTheme}
    >
      {/* {props.signedIn === true ? <RootNavigator /> : <LoginNavigator />} */}
      {/* {props.signedIn === true ? <MainStackNavigator /> : <LoginNavigator />} */}
      <WebStack.Navigator>
        <WebStack.Screen
          name='Home'
          component={TemporaryLanding}
          options={{ headerShown: false }}
        />
        <WebStack.Screen
          name='Privacy'
          component={PrivacyScreen}
          options={{ headerShown: false }}
        />
      </WebStack.Navigator>
      {/* <TemporaryLanding />
      <PrivacyScreen /> */}
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

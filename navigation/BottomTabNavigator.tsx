import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';
import TabThreeScreen from '../screens/TabThreeScreen';
import ProfileButton from '../components/ProfileButton';
import PortalsScreen from '../screens/portals/PortalsScreen';
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen';
import StuffScreen from '../screens/stuff/StuffScreen';
import DiscoverScreen from '../screens/discover/DiscoverScreen';
import ScanButton from '../components/ScanButton';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Root'>;

type RootProps = {
  route: ProfileScreenRouteProp;
};

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Portals'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name='Stuff'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Portals'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Discover'
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Stuff"
        component={StuffScreen}
        options={{ 
          // headerRight: () => (
          //   <ProfileButton
          //     notification={false}
          //     image=''
          //   />
          // ),
          // headerLeft: () => (
          //   <ScanButton/>
          // ),
          // headerTitle: 'Portals' 
          headerShown: false,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name='Portals'
        component={PortalsScreen}
        options={{
          // headerRight: () => <ProfileButton notification={false} image='' />,
          // headerLeft: () => <ScanButton />,
          // headerTitle: 'Portals',
          headerShown: false,
        }}
      />
      <TabTwoStack.Screen
        name='Select'
        component={PortalSelectScreen}
        options={{
          // headerRight: () => <ProfileButton notification={false} image='' />,
          // headerLeft: () => <ScanButton />,
          headerTitle: 'Portal',
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ 
          // headerRight: () => (
          //   <ProfileButton
          //     notification={false}
          //     image=''
          //   />
          // ),
          // headerLeft: () => (
          //   <ScanButton/>
          // ),
          // headerTitle: 'Portals' 
          headerShown: false,
        }}
      />
    </TabThreeStack.Navigator>
  )
}

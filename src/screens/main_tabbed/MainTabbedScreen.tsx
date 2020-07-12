import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { MainTabParams, TabTwoParamList } from '../../../types';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import { ParamListBase, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import StuffScreen from '../stuff/StuffScreen';
import DiscoverScreen from '../discover/DiscoverScreen';
import PortalsScreen from '../portals/PortalsScreen'; 
import PortalSelectScreen from '../portal_select/PortalSelectScreen';
import { Ionicons } from '@expo/vector-icons';

const MainTabs = createBottomTabNavigator<MainTabParams>();
const Stack = createStackNavigator<TabTwoParamList>();

export default function MainTabbedScreen({
  navigation,
  route,
}: StackScreenProps<ParamListBase, string> ) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'MAINTABS?';
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: routeName,
    })
  }, [navigation, routeName]);

  return (
    <MainTabs.Navigator initialRouteName='Portals'>
      <MainTabs.Screen
        name='Stuff'
        component={StuffScreen}
        options={{
          title: 'Stuff',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <MainTabs.Screen
        name='Portals'
        // component={PortalsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      >
        {({ navigation }: BottomTabScreenProps<MainTabParams>) => (
          <Stack.Navigator>
            <Stack.Screen
              name='Portals'
              component={PortalsScreen}
              options={{
                // headerRight: () => <ProfileButton notification={false} image='' />,
                // headerLeft: () => <ScanButton />,
                // headerTitle: 'Portals',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Select'
              component={PortalSelectScreen}
              options={{
                // headerRight: () => <ProfileButton notification={false} image='' />,
                // headerLeft: () => <ScanButton />,
                headerTitle: 'Portal',
              }}
            />
          </Stack.Navigator>
        )}
      </MainTabs.Screen>
      <MainTabs.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

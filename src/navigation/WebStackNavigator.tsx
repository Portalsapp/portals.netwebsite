import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/web/home/HomeScreen';
import HeaderLinks from '../components/headerLinks/HeaderLinks';

const Stack = createStackNavigator();

export default function WebStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderLinks />,
          headerLeft: () => (
            <View style={{ margin: 20 }}>
              <Text style={{ fontSize: 24 }}>Portals</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

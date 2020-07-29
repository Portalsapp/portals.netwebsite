import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import PortalsScreen from '../screens/portals/PortalsScreenContainer';
import PortalSelectScreen from '../screens/portal_select/PortalSelectScreen';
import AddPortalScreen from '../screens/add_portal/AddPortalContainer';
import HomeScreen from '../screens/home_screen/HomeScreenContainer';
import BankScreen from '../screens/bank/BankScreenContainer';
import PublisherScreen from '../screens/publisher/PublisherScreenContainer';
import ManagePortalScreen from '../screens/manage_portal/ManagePortalScreenContainer';
import CreatePortalScreen from '../screens/create_portal/CreatePortalScreenContainer';
import ShopScreen from '../screens/shop/ShopScreenContainer';
// Components
import ConnectedButtons from '../components/connected_buttons/ConnectedButtons';

import {
  PortalsStackParamList,
  MainStackNavigatorParamList,
  PublisherStackParamList,
  MobileTabNavigatorParamList,
  HomeStackParamList,
  BankStackParamList,
} from '../../types';

import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';
import { UserData } from '../reducers/types';
import { nav } from 'aws-amplify';

const MobileTabs = createBottomTabNavigator<MobileTabNavigatorParamList>();
const PortalStack = createStackNavigator<PortalsStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const BankStack = createStackNavigator<BankStackParamList>();
const PublisherStack = createStackNavigator<PublisherStackParamList>();

type Props = {
  userData: UserData,
  setHomeFeedState: (state: 'global' | 'friends' | 'you') => void,
};

export default function MobileTabNavigator(props: Props) {
  return (
    <MobileTabs.Navigator
      initialRouteName='HomeStack'
      tabBarOptions={{
        activeTintColor: '#55b9f3',
      }}
    >
      {/* Portals Stack */}
      <MobileTabs.Screen
        name='PortalsStack'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='ios-egg'
              color={color}
            />
          ),
          tabBarLabel: 'Portals',
        }}
      >
        {({ navigation }: StackScreenProps<MainStackNavigatorParamList>) => (
          <PortalStack.Navigator>
            <PortalStack.Screen
              name='Portals'
              component={PortalsScreen}
              options={{
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileModal')}
                    style={{ marginLeft: 20 }}
                  >
                    {props.userData.pic ? (
                      <Image
                        source={{ uri: props.userData.pic }}
                        style={{
                          width: 40,
                          height: 40,
                          borderWidth: 1,
                          borderColor: '#a4a4a4',
                          marginBottom: 10,
                        }}
                      />
                    ) : (
                      <Ionicons
                        size={40}
                        name='ios-contact'
                        color={'#a4a4a4'}
                      />
                    )}
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
                    onPress={() => navigation.navigate('CartModal')}
                    style={{ marginRight: 20 }}
                  >
                    <Ionicons size={40} name='ios-cart' color={'#a4a4a4'} />
                  </TouchableOpacity>
                ),
              }}
            />
            <PortalStack.Screen
              name='PortalSelect'
              component={PortalSelectScreen}
              options={({
                route,
              }: StackScreenProps<PortalsStackParamList>) => ({
                headerShown: false,
                headerBackTitle: route.params.title,
                headerTitle: () => null,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CartModal')}
                    style={{ marginRight: 20 }}
                  >
                    <Ionicons size={40} name='ios-cart' color={'#a4a4a4'} />
                  </TouchableOpacity>
                ),
              })}
            />
            <PortalStack.Screen
              name='AddPortal'
              component={AddPortalScreen}
              options={{
                headerShown: false,
              }}
            />
            <PortalStack.Screen
              name="Shop"
              component={ShopScreen}
              options={{
                headerShown: false,
              }}
            />
          </PortalStack.Navigator>
        )}
      </MobileTabs.Screen>
      {/* Home Stack */}
      <MobileTabs.Screen
        name='HomeStack'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='ios-contact'
              color={color}
            />
          ),
          tabBarLabel: 'Home',
        }}
      >
        {({ navigation }: StackScreenProps<MainStackNavigatorParamList>) => (
          <HomeStack.Navigator>
            <HomeStack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileModal')}
                    style={{ marginLeft: 20 }}
                  >
                    {props.userData.pic ? (
                      <Image
                        source={{ uri: props.userData.pic }}
                        style={{
                          width: 40,
                          height: 40,
                          borderWidth: 1,
                          borderColor: '#a4a4a4',
                          marginBottom: 10,
                        }}
                      />
                    ) : (
                      <Ionicons
                        size={40}
                        name='ios-contact'
                        color={'#a4a4a4'}
                      />
                    )}
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <ConnectedButtons
                    tabs={['global', 'friends', 'you']}
                    onPress={[
                      () => props.setHomeFeedState('global'),
                      () => props.setHomeFeedState('friends'),
                      () => props.setHomeFeedState('you'),
                    ]}
                    initialSelected={1}
                  />
                ),
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CartModal')}
                    style={{ marginRight: 20 }}
                  >
                    <Ionicons size={40} name='ios-cart' color={'#a4a4a4'} />
                  </TouchableOpacity>
                ),
              }}
            />
          </HomeStack.Navigator>
        )}
      </MobileTabs.Screen>
      {/* Bank Stack */}
      <MobileTabs.Screen
        name='BankStack'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name='ios-archive'
              color={color}
            />
          ),
          tabBarLabel: 'Bank',
        }}
      >
        {({ navigation }: StackScreenProps<MainStackNavigatorParamList>) => (
          <BankStack.Navigator>
            <BankStack.Screen
              name='Bank'
              component={BankScreen}
              options={{
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileModal')}
                    style={{ marginLeft: 20 }}
                  >
                    {props.userData.pic ? (
                      <Image
                        source={{ uri: props.userData.pic }}
                        style={{
                          width: 40,
                          height: 40,
                          borderWidth: 1,
                          borderColor: '#a4a4a4',
                          marginBottom: 10,
                        }}
                      />
                    ) : (
                      <Ionicons
                        size={40}
                        name='ios-contact'
                        color={'#a4a4a4'}
                      />
                    )}
                  </TouchableOpacity>
                ),
                headerTitle: () => (
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
          </BankStack.Navigator>
        )}
      </MobileTabs.Screen>
      {/* Publisher Stack */}
      {/* Add checking if user is a publisher */}
      {true && (
        <MobileTabs.Screen
          name='PublisherStack'
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                size={30}
                style={{ marginBottom: -3 }}
                name='ios-hammer'
                color={color}
              />
            ),
            tabBarLabel: 'Publisher',
          }}
        >
          {({ navigation }: StackScreenProps<MainStackNavigatorParamList>) => (
            <PublisherStack.Navigator>
              <PublisherStack.Screen
                name='Publisher'
                component={PublisherScreen}
                options={{
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ProfileModal')}
                      style={{ marginLeft: 20 }}
                    >
                      {props.userData.pic ? (
                        <Image
                          source={{ uri: props.userData.pic }}
                          style={{
                            width: 40,
                            height: 40,
                            borderWidth: 1,
                            borderColor: '#a4a4a4',
                            marginBottom: 10,
                          }}
                        />
                      ) : (
                        <Ionicons
                          size={40}
                          name='ios-contact'
                          color={'#a4a4a4'}
                        />
                      )}
                    </TouchableOpacity>
                  ),
                  headerTitle: () => (
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
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => null}
                      style={{ marginRight: 20 }}
                    >
                      <Ionicons size={40} name='ios-mail' color={'#a4a4a4'} />
                    </TouchableOpacity>
                  ),
                }}
              />
              <PublisherStack.Screen
                name='ManagePortal'
                component={ManagePortalScreen}
              />
              <PublisherStack.Screen
                name='CreatePortal'
                component={CreatePortalScreen}
              />
            </PublisherStack.Navigator>
          )}
        </MobileTabs.Screen>
      )}
    </MobileTabs.Navigator>
  );
}

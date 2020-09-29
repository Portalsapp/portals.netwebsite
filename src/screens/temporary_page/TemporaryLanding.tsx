import { Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WebStackParamList } from '../../../types';

export default function TemporaryLanding() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/app_icons/3x/Portals@3x.png')}
        style={{ width: 300, height: 300 }}
      />
      <Text
        style={{
          fontFamily: 'OpenSans_300Light',
          fontSize: 36,
          paddingVertical: 10,
        }}
      >
        Portals.net
      </Text>
      <Text
        style={{
          fontFamily: 'OpenSans_300Light',
          fontSize: 24,
          paddingVertical: 5,
        }}
      >
        Coming Soon
      </Text>
      <Link to="/privacy">
        <Text
          style={{
            fontFamily: 'OpenSans_300Light',
            fontSize: 24,
            paddingVertical: 5,
            color: 'blue',
            borderBottomColor: 'blue',
            borderBottomWidth: 1,
          }}
        >
          Privacy Policy
        </Text>
      </Link>
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('Privacy')}
      >
      <Text
        style={{
          fontFamily: 'OpenSans_300Light',
          fontSize: 24,
          paddingVertical: 5,
          color: 'blue',
          borderBottomColor: 'blue',
          borderBottomWidth: 1,
        }}
        >
        Privacy Policy
      </Text>
        </TouchableOpacity> */}
    </View>
  );
}

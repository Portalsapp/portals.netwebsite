import { Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WebStackParamList } from '../../../types';
import AppStoreIcon from '../../components/app_store_icon/AppStoreIcon';

export default function TemporaryLanding() {
  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      colors={['#5C69AC', '#98A0CC']}
    >
      <Image
        source={require('../../assets/images/plain_shadow_logo.png')}
        style={{ width: 300, height: 300 }}
      />
      <Text
        style={{
          fontFamily: 'OpenSans_400Regular_Italic',
          fontSize: 26,
          paddingVertical: 10,
          color: 'white',
        }}
      >
        Website Coming Soon
      </Text>
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() =>
          window.open(
            'https://apps.apple.com/us/app/portals-net/id1530638981',
            '_blank'
          )
        }
      >
        <AppStoreIcon scale={2} />
      </TouchableOpacity>
      {/* <Text
        style={{
          fontFamily: 'OpenSans_300Light',
          fontSize: 24,
          paddingVertical: 5,
        }}
      >
        Coming Soon
      </Text> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 300,
          marginTop: 40,
        }}
      >
        <Link to='/privacy' style={{ color: 'white' }}>
          <Text
            style={{
              fontFamily: 'OpenSans_400Regular',
              fontSize: 18,
              paddingVertical: 5,
              color: 'white',
              // borderBottomColor: 'white',
              // borderBottomWidth: 1,
            }}
          >
            Privacy Policy
          </Text>
        </Link>
        <Link to='/support'>
          <Text
            style={{
              fontFamily: 'OpenSans_400Regular',
              fontSize: 18,
              paddingVertical: 5,
              color: 'white',
            }}
          >
            Support
          </Text>
        </Link>
      </View>
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
    </LinearGradient>
  );
}

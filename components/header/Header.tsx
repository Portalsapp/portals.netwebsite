import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from './HeaderStyle';

export default function Header() {
  return (
    <View style={style.header}>
      <View style={style.headerLogo}>
        <Text style={style.headerLogoText}>Portals</Text>
      </View>
      <View style={style.headerItems}>
        <Text style={style.headerItemsText}>Username</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/profile.png')}
            style={style.headerItemsImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/settings.png')}
            style={style.headerItemsImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

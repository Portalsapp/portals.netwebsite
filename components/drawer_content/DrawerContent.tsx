import React from 'react'
import { View, Text, Image } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import style from './DrawerContentStyle'

/*@ts-ignore*/
export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>Portals App</Text>
        </View>
        <View style={style.bodyContainer}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={style.profileImage}
            />
          <View style={style.usernameTextContainer}>
            <Text style={style.usernameText}>Username</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

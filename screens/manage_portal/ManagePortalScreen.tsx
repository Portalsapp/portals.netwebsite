import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './ManagePortalScreenStyle'

const data = {
  name: 'Fortnite',
  description: 'where we dropping',
  platformAvailibility: ['xbox', 'pc', 'mobile'],
  verified: true,
  items: [
    {
      name: 'Gun',
      pic: require('../../assets/images/fortnite.jpg'),
    },
    {
      name: 'Sword',
      pic: require('../../assets/images/fortnite.jpg'),
    },
    {
      name: 'Potion',
      pic: require('../../assets/images/fortnite.jpg'),
    },
  ],
};

export default function ManagePortalScreen() {
  return (
    <View style={style.container}>
      <Text>Manage</Text>
      <Image source={require('../../assets/images/fortnite.jpg')} style={style.image} />
    </View>
  )
}

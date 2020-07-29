import React from 'react'
import { View, Text, Image } from 'react-native'

export default function TemporaryLanding() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/images/app_icons/3x/Portals@3x.png')} style={{ width: 300, height: 300 }} />
      <Text style={{
        fontFamily: 'OpenSans_300Light',
        fontSize: 36,
        paddingVertical: 20,
      }}>Coming Soon, PortalVerse Inc.</Text>
    </View>
  )
}

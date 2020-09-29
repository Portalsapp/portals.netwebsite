import React from 'react'
import { View, Text, Image } from 'react-native'

export default function PrivacyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontFamily: 'OpenSans_300Light',
          fontSize: 36,
          paddingVertical: 10,
        }}
      >
        Portals.net Privacy Policy
      </Text>
    </View>
  );
}

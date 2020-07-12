import React from 'react'
import { View, Text, Image } from 'react-native'
import PortalLink from '../portal_link/PortalLink'
import style from './DiscoverGroupStyle'

type Props = {
  title: string,
  count: number,
}

export default function DiscoverGroup(props: Props) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>{props.title}</Text>
      </View>
      <View style={style.linkContainer}>
        {[...Array(props.count)].map((elem, index) => (
          <PortalLink
            title={'Portal'}
            source={
              <Image
                source={require('../../assets/images/profile.png')}
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
            }
            selected={false}
            onPress={() => {}}
            size={50}
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

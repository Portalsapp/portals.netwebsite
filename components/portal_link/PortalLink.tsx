import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './PortalLinkStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  source: JSX.Element,
  title: string,
  selected: boolean,
}

export default function PortalLink(props : Props) {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        {props.source}
        <View style={style.titleContainer}>
          <Text style={style.title}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

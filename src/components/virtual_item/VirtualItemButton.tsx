import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './VirtualItemStyle'
import { VirtualItem } from '../../reducers/types'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  size: number,
  item: VirtualItem,
  pic: string,
}

export default function VirtualItemButton(props: Props) {
  const imgSource = props.pic ? { uri: props.pic } : require('../../assets/images/fortnite.jpg');
  return (
    <TouchableOpacity
      style={[style.container, { width: props.size, height: props.size }]}
    >
      <Image
        source={imgSource}
        style={[{ width: props.size * 0.7, height: props.size * 0.7}, style.image]}
      />
      <Text style={style.title}>{props.item.displayName}</Text>
    </TouchableOpacity>
  );
}

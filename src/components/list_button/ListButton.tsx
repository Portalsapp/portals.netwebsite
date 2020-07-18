import React from 'react'
import { View, Text } from 'react-native'
import style from './ListButtonStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  width: number,
  height: number,
  title: string,
  onPress: () => void,
}

export default function ListButton(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[style.container, { width: props.width, height: props.height }]}
    >
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

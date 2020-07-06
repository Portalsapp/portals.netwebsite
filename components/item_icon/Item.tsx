import React from 'react'
import { View, Text, Image, StyleProp, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './ItemStyle';

type Props = {
  name?: string,
  description?: string,
  picture?: string,
  mappingKey?: string,
  isVirtual?: boolean,
  token?: string,

  size: number,
  onPress?: Function,
  style?: StyleProp<ViewStyle>,
}

export default function Item(props: Props) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => props.onPress ? props.onPress() : null }
      >
        <View style={style.buttonContainer}>
          <Image source={require('../../assets/images/item.png')} style={{ width: props.size, height: props.size}} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

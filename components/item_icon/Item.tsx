import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './ItemStyle';

type Props = {
  size: number,
  onPress?: Function,
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

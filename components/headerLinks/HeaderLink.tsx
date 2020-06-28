import React from 'react'
import { View, Text } from 'react-native'
import style from './headerStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string,
  button?: boolean,
}

export default function HeaderLink({ title, button = false} : Props) {
  return (
    <View style={!button ? style.linkContainer : style.buttonContainer}>
      <TouchableOpacity>
        <Text style={!button ? style.linkText : style.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

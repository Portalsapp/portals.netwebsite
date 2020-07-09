import React from 'react'
import { View, Text } from 'react-native'
import { UserData } from '../../reducers/types'

type Props = {
  userData: UserData,
  setUserData: (userData: UserData) => void,
}

export default function ProfileScreen(props : Props) {
  return (
    <View>
      <Text>{props.userData.displayName}</Text>
    </View>
  )
}

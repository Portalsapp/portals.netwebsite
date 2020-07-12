import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { UserData } from '../../reducers/types'
import client, { userDataSubscription } from '../../../functions/AWSFunctions'
import { Auth } from 'aws-amplify'
import { useFocusEffect } from '@react-navigation/native'
import * as subscriptions from '../../graphql/subscriptions'
import gql from 'graphql-tag'

type Props = {
  userData: UserData,
  setUserData: (userData: UserData) => void,
}

export default function SettingsScreen(props: Props) {
  return (
    <View>
      <Text>Settings</Text>
      <Text>{props.userData.displayName}</Text>
      <Text>{props.userData.pic}</Text>
    </View>
  )
}

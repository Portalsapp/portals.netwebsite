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
  console.log(props.userData.username);
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      const subscription = client
        .subscribe({
          query: gql(subscriptions.onUpdateAmplifyDataStoreUserMetadata),
          variables: {
            ds_pk: 'USER#' + props.userData.username,
            ds_sk: '#METADATA#' + props.userData.username,
          },
        })
        .subscribe({
          next: (data) => {
            console.log('new data:', data);
          },
          error: (error) => {
            console.log('userDataSubscription Error:', error);
          },
        });
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        /*@ts-ignore */
        // subscription.unsubscribe();
        console.log('unsub');
        subscription.unsubscribe();
      };
    }, [])
  );

  return (
    <View>
      <Text>Settings</Text>
      <Text>{props.userData.displayName}</Text>
      <Text>{props.userData.pic}</Text>
    </View>
  )
}

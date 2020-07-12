import React from 'react'
import { View, Text } from 'react-native'
import CreateAccountForm from './CreateAccountForm'
import style from './HomeScreenStyle';

export default function HomeScreen() {
  return (
    <View style={style.mainContainer}>
      <View style={style.formContainer}>
        <CreateAccountForm />
      </View>
      <View style={style.formContainer}>
        <Text style={{ fontSize: 160, color: '#f4f4f4'}}>Portals</Text>
      </View>
    </View>
  )
}

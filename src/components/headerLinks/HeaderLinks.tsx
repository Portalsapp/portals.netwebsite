import React from 'react'
import { View, Text } from 'react-native'
import HeaderLink from './HeaderLink';
import style from './headerStyle';

export default function HeaderLinks() {
  return (
    <View style={style.headerContainer}>
      <HeaderLink title='press' />
      <HeaderLink title='legal' />
      <HeaderLink title='status' />
      <HeaderLink title='developer' />
      <HeaderLink title='business' />
      <HeaderLink title='Sign In' button={true}/>
    </View>
  );
}

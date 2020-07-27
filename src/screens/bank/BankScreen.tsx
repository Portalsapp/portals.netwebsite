import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import style from './BankScreenStyle'
import { FlatList } from 'react-native-gesture-handler'
import { VirtualItem } from '../../reducers/types'
import VirtualItemButton from '../../components/virtual_item/VirtualItemButton'
import ListButton from '../../components/list_button/ListButton'
import { ShopStackParamList, BankStackParamList, MainStackNavigatorParamList } from '../../../types'
import { StackNavigationProp } from '@react-navigation/stack'
import ItemList from '../../components/item_list/ItemList'
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const initialItems: VirtualItem[] = [
  {
    displayName: 'test',
  }
]

type BankScreenNavigationProp = StackNavigationProp<
  MainStackNavigatorParamList,
  'TradeModal'
>;

type Props = {
  items: VirtualItem[],
  navigation: BankScreenNavigationProp;
}

export default function BankScreen(props: Props) {
  return (
    <View style={style.container}>
      <ItemList
        headerComponent={() => <HeaderComponent navigation={props.navigation}/>}
        columns={3}
        onPress={(item: VirtualItem) => null}
        items={props.items}
      />
    </View>
  );
}

type HeaderProps = {
  navigation: BankScreenNavigationProp,
}

const HeaderComponent = (props: HeaderProps) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ListButton
        title='Trade'
        width={(screenWidth / 2) - 20}
        height={40}
        onPress={() => props.navigation.navigate('TradeModal')}
      />
      <ListButton
        title='!'
        width={(screenWidth / 2) - 20}
        height={40}
        onPress={() => null}
      />
    </View>
  );
};

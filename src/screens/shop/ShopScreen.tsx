import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import style from './ShopScreenStyle'
import { FlatList } from 'react-native-gesture-handler'
import { VirtualItem } from '../../reducers/types'
import VirtualItemButton from '../../components/virtual_item/VirtualItemButton'
import ListButton from '../../components/list_button/ListButton'
import { ShopStackParamList } from '../../../types'
import { StackNavigationProp } from '@react-navigation/stack'

const screenWidth = Dimensions.get('window').width;
const initialItems: VirtualItem[] = [
  {
    displayName: 'test',
  }
]

type ShopScreenNavigationProp = StackNavigationProp<
  ShopStackParamList,
  'InitiateTrade'
>;

type Props = {
  items: VirtualItem[],
  navigation: ShopScreenNavigationProp;
}

export default function ShopScreen(props: Props) {

  // const [items, setItems] = useState(props.items);

  /*@ts-ignore*/
  const renderItem = ({ item }) => (
    <VirtualItemButton 
      item={item}
      size={screenWidth / 3}
      pic={item.pic}
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => item.ds_sk ? item.ds_sk : index.toString();

  return (
    <View style={style.container}>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          marginTop: 20,
        }}
        numColumns={3}
        data={props.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={() => <HeaderComponent navigation={props.navigation}/>}
      />
    </View>
  );
}

type HeaderProps = {
  navigation: ShopScreenNavigationProp,
}

const HeaderComponent = (props: HeaderProps) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ListButton
        title='Trade'
        width={(screenWidth / 2) - 20}
        height={40}
        onPress={() => props.navigation.navigate('InitiateTrade')}
      />
      <ListButton
        title='History'
        width={(screenWidth / 2) - 20}
        height={40}
        onPress={() => null}
      />
    </View>
  );
};

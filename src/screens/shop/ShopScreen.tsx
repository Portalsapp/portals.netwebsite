import React, { useState } from 'react'
import { View, Text } from 'react-native'
import style from './ShopScreenStyle'
import { FlatList } from 'react-native-gesture-handler'
import { VirtualItem } from '../../reducers/types'

type Props = {
  items: VirtualItem[],
}

const initialItems: VirtualItem[] = [
  {
    displayName: 'test',
  }
]

export default function ShopScreen(props: Props) {

  // const [items, setItems] = useState(props.items);

  /*@ts-ignore*/
  const renderItem = ({ item }) => <Text>{item.displayName}</Text>;
  /*@ts-ignore*/
  const keyExtractor = (item, index) => item.ds_sk ? item.ds_sk : index.toString();

  return (
    <View style={style.container}>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        numColumns={3}
        data={props.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

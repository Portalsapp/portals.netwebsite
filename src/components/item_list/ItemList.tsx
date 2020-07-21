import React from 'react'
import { View, Text, FlatList } from 'react-native'
import VirtualItemButton from '../virtual_item/VirtualItemButton';
import { VirtualItem } from '../../reducers/types';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

type Props = {
  headerComponent?: () => JSX.Element,
  columns?: number,
  items: VirtualItem[],
  horizontal?: boolean,
  onPress: (item: VirtualItem) => void,
}

export default function ItemList(props: Props) {
  /*@ts-ignore*/
  const renderItem = ({ item }) => (
    <VirtualItemButton 
      item={item}
      size={screenWidth / 3}
      pic={item.pic}
      onPress={() => props.onPress(item)}
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => item.ds_sk ? item.ds_sk : index.toString();
  if (props.horizontal) {
    return (
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: 20,
        }}
        horizontal={true}
        data={props.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          props.headerComponent ? props.headerComponent() : null
        }
      />
    );
  }
  return (
    <FlatList
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
      }}
      numColumns={props.columns ? props.columns : 3}
      data={props.items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={props.headerComponent ? props.headerComponent() : null}
    />
  );
}

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { VirtualItem } from '../../reducers/types'
import style from './TradingScreenStyle'
import ItemList from '../../components/item_list/ItemList'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack';
import { ShopStackParamList } from '../../../types';

type ShopScreenNavigationProp = StackNavigationProp<ShopStackParamList, 'Shop'>;

type Props = {
  items: VirtualItem[],
  navigation: ShopScreenNavigationProp;
}

const initialTradeItems: VirtualItem[] = [];

export default function TradingScreen(props: Props) {
  const [tradeItems, setTradeItems] = useState(initialTradeItems);

  const addToTrade = (item: VirtualItem) => {
    if (!tradeItems.includes(item)) {
      setTradeItems([...tradeItems, item]);
    }
  }

  const removeFromTrade = (item: VirtualItem) => {
    setTradeItems(tradeItems.filter((elem) => elem !== item));
  }

  return (
    <View style={style.container}>
      <ItemList
        items={props.items}
        columns={3}
        headerComponent={() => (
          <Text style={style.subtitleText}>Your Items</Text>
        )}
        onPress={(item: VirtualItem) => addToTrade(item)}
      />
      <View style={style.offerContainer}>
        <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
          <Text style={style.subtitleText}>Your Offer</Text>
          <ItemList
            items={tradeItems}
            horizontal={true}
            onPress={(item: VirtualItem) => removeFromTrade(item)}
          />
          <Text style={style.subtitleText}>Their Offer</Text>
          <ItemList
            items={props.items}
            horizontal={true}
            onPress={(item: VirtualItem) => null}
          />
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={style.submitButtonContainer}
              onPress={() => props.navigation.pop(2)}
            >
              <Text style={style.submitButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.submitButtonContainer}
              onPress={() => props.navigation.pop(2)}
            >
              <Text style={style.submitButtonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from './TradeHistoryScreenStyle'
import { StackNavigationProp } from '@react-navigation/stack';
import { ShopStackParamList } from '../../../types';
import { VirtualItem, BankHistory, UserData } from '../../reducers/types';
import { FlatList } from 'react-native-gesture-handler';
import HistoryItem from '../../components/history_item/HistoryItem';

type ShopScreenNavigationProp = StackNavigationProp<ShopStackParamList, 'Shop'>;

type Props = {
  navigation: ShopScreenNavigationProp;
  tradeHistory: BankHistory[],
  userData: UserData,
  setUserTradeHistory: (tradeHistory: BankHistory[]) => void,
}

export default function TradeHistoryScreen(props: Props) {
  const [tradeHistory, setTradeHistory] = useState(props.tradeHistory);

  useEffect(() => {
    setTradeHistory(props.tradeHistory);
  }, [props.tradeHistory])

  const renderItem = ({ item, index }) => (
    <HistoryItem
      data={item}
      username={props.userData.username}
      onLikePress={(updItem: BankHistory) => {
        const upd = [...tradeHistory];
        upd[index] = updItem;
        props.setUserTradeHistory(upd);
      }}
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={style.container}>
      <FlatList
        data={tradeHistory}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

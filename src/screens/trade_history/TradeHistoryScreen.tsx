import React from 'react'
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
  bankHistory: BankHistory[],
  userData: UserData,
}

export default function TradeHistoryScreen(props: Props) {
  console.log(props.bankHistory);

  const renderItem = ({ item }) => (
    <HistoryItem data={item} username={props.userData.username}/>
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={style.container}>
      <View style={style.closeContainer}>
        <TouchableOpacity
          style={style.closeButton}
          onPress={() => props.navigation.goBack()}
        >
          <Image style={style.closeButton} source={require('../../assets/images/close.png')} />
        </TouchableOpacity>
      </View>
      <Text style={style.titleText}>History</Text>
      <FlatList
        data={props.bankHistory}
        contentContainerStyle={{ flex: 1}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

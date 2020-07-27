import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { BankHistory, UserData } from '../../reducers/types'
import style from './HomeScreenStyle'
import HistoryItem from '../../components/history_item/HistoryItem'

type Props = {
  bankHistory: BankHistory[],
  userData: UserData,
  setUserBankHistory: (bankHistory: BankHistory[]) => void,
}

export default function HomeScreen(props: Props) {
  const [bankHistory, setBankHistory] = useState(props.bankHistory)

  useEffect(() => {
    setBankHistory(props.bankHistory);
  }, [props.bankHistory])

  const renderItem = ({ item, index }) => (
    <HistoryItem
      data={item}
      username={props.userData.username}
      onLikePress={(updItem: BankHistory) => {
        const upd = [...bankHistory];
        upd[index] = updItem;
        props.setUserBankHistory(upd);
      }}
      overline={index !== 0}
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();
  console.log('bank history', bankHistory.length);
  console.log('bank history prop', props.bankHistory);
  return (
    <View style={style.container}>
      <FlatList
        data={bankHistory}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

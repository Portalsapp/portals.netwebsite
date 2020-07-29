import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { BankHistory, UserData } from '../../reducers/types';
import style from './HomeScreenStyle';
import HistoryItem from '../../components/history_item/HistoryItem';

type Props = {
  homeFeedState: 'global' | 'friends' | 'you';
  bankHistory: BankHistory[];
  userData: UserData;
  setUserBankHistory: (bankHistory: BankHistory[]) => void;
  globalTransactionFeed: BankHistory[];
  setGlobalTransactionHistory: (transactionHistory: BankHistory[]) => void;
};

export default function HomeScreen(props: Props) {
  const [feedState, setFeedState] = useState(props.homeFeedState);
  const [bankHistory, setBankHistory] = useState(props.bankHistory);
  const [globalFeed, setGlobalFeed] = useState(props.globalTransactionFeed);

  useEffect(() => {
    setBankHistory(props.bankHistory);
  }, [props.bankHistory]);

  useEffect(() => {
    setGlobalFeed(props.globalTransactionFeed);
  }, [props.globalTransactionFeed]);

  useEffect(() => {
    setFeedState(props.homeFeedState);
  }, [props.homeFeedState]);

  const onLikePress = (updItem: BankHistory, index: number) => {
    switch (feedState) {
      case 'global':
        var upd = [...globalFeed];
        upd[index] = updItem;
        props.setGlobalTransactionHistory(upd);
      case 'friends':
        var upd = [...bankHistory];
        upd[index] = updItem;
        props.setUserBankHistory(upd);
      case 'you':
        var upd = [...bankHistory];
        upd[index] = updItem;
        props.setUserBankHistory(upd);
    }
  };

  const renderItem = ({ item, index }) => (
    <HistoryItem
      data={item}
      username={props.userData.username}
      onLikePress={(updItem: BankHistory) => onLikePress(updItem, index)}
      overline={index !== 0}
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();

  const getData = () => {
    switch (feedState) {
      case 'global':
        return globalFeed;
      case 'friends':
        return bankHistory;
      case 'you':
        return bankHistory;
    }
  };

  return (
    <View style={style.container}>
      <FlatList
        data={getData()}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

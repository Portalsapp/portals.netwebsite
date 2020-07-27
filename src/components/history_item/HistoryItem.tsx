import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { BankHistory } from '../../reducers/types';
import { Ionicons } from '@expo/vector-icons';
import style from './HistoryItemStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  data: BankHistory;
  username: string;
  onLikePress?: (item: BankHistory) => void;
  overline?: boolean;
};

export default function HistoryItem(props: Props) {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    setData(props.data);
  }, [props.data])

  const itemSource = data.item.pic
    ? { uri: data.item.pic }
    : require('../../assets/images/fortnite.jpg');

  const dateTraded = new Date(data.createdAt);
  let [hour, minute, second] = dateTraded
    .toLocaleTimeString()
    .slice(0, 7)
    .split(':');

  const recipient = 'USER#' + props.username === data.to.ds_pk;
  const overlineStyle = props.overline ? style.overline : {};

  return (
    <View style={style.container}>
      <View style={style.overline} />
      <Text style={style.titleText}>
        {dateTraded.toDateString()} at {hour}:{minute}
      </Text>
      <View style={style.body}>
        <Image
          style={style.image}
          source={
            data.to.pic
              ? { uri: data.to.pic }
              : require('../../assets/images/fortnite.jpg')
          }
        />
        {recipient ? (
          <Ionicons size={50} name='ios-arrow-round-back' color={'black'} />
        ) : (
          <Ionicons size={50} name='ios-arrow-round-forward' color={'black'} />
        )}
        <Image style={style.image} source={itemSource} />
        {recipient ? (
          <Text style={style.bodyText}>from</Text>
        ) : (
          <Text style={style.bodyText}>to</Text>
        )}
        <Image
          style={style.image}
          source={
            data.from.pic
              ? { uri: data.from.pic }
              : require('../../assets/images/fortnite.jpg')
          }
        />
        <TouchableOpacity
          style={style.likeButtonContainer}
          onPress={() =>
            props.onLikePress
              ? props.onLikePress({ ...data, liked: true })
              : null
          }
        >
          <Ionicons
            size={35}
            name='ios-heart'
            color={data.liked ? 'red' : 'grey'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

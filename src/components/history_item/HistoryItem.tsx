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

  return (
    <View style={style.container}>
      <Text style={style.titleText}>
        {dateTraded.toDateString()} at {hour}:{minute}
      </Text>
      <View style={style.body}>
        <Image style={style.image} source={itemSource} />
        {'USER#' + props.username !== data.to.ds_pk ? (
          <>
            <Ionicons
              size={50}
              name='ios-arrow-round-forward'
              color={'black'}
            />
            <Text style={style.bodyText}>Transfered to</Text>
            <Image
              style={style.image}
              source={
                data.to.pic
                  ? { uri: data.to.pic }
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
                size={50}
                name='ios-thumbs-up'
                color={data.liked ? 'green' : 'grey'}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Ionicons size={50} name='ios-arrow-round-back' color={'black'} />
            <Text style={style.bodyText}>Recieved from</Text>
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
                size={50}
                name='ios-thumbs-up'
                color={data.liked ? 'green' : 'grey'}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

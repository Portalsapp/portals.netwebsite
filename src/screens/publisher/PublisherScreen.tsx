import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import style from './PublisherScreenMobileStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { PublisherStackParamList } from '../../../types';
import { useNavigation } from '@react-navigation/native';
import { Portal } from '../../reducers/types';
import { useState } from 'react';
import Image from '../../components/cache_image/Image'

const addPortal: Portal = {
  displayName: 'Add Portal',
  pic: 'https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png',
};

type Props = {
  portals: Portal[];
};

export default function PublisherScreen(props: Props) {
  const [portals, setPortals] = useState(props.portals);
  const navigation = useNavigation();

  /*@ts-ignore*/
  const renderItem = ({ item }) => {
    const itemSource = item.pic
      ? item.pic
      : 'https://i.pinimg.com/originals/60/ec/c7/60ecc7294c8000c63b963933a673cf92.png';

    const onPress =
      item.displayName === 'Add Portal'
        ? () => navigation.navigate('CreatePortal')
        : () => navigation.navigate('ManagePortal', { data: item });
    return (
      <TouchableOpacity
        style={style.portalButtonContainer}
        onPress={() => onPress()}
      >
        <Image uri={itemSource} style={style.image} defaultSource={require('../../assets/images/fortnite.jpg')}/>
        <Text style={style.titleText}>{item.displayName}</Text>
      </TouchableOpacity>
    );
  };
  /*@ts-ignore*/
  const keyExtractor = (item, index) =>
    item.ds_sk ? item.ds_sk : index.toString();

  return (
    <View style={style.container}>
      <FlatList
        contentContainerStyle={style.contentContainerStyle}
        data={[...portals, addPortal]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
      />
    </View>
  );
}

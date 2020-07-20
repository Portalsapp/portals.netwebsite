import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from './TradeHistoryScreenStyle'
import { StackNavigationProp } from '@react-navigation/stack';
import { ShopStackParamList } from '../../../types';
import { VirtualItem } from '../../reducers/types';

type ShopScreenNavigationProp = StackNavigationProp<ShopStackParamList, 'Shop'>;

type Props = {
  navigation: ShopScreenNavigationProp;
}

export default function TradeHistoryScreen(props: Props) {
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
      <Text>History</Text>
    </View>
  );
}

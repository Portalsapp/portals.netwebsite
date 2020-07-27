import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { VirtualItem } from '../../reducers/types';
import style from './TradingScreenStyle';
import ItemList from '../../components/item_list/ItemList';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { ShopStackParamList } from '../../../types';
import * as ScreenOrientation from 'expo-screen-orientation';
import { input } from 'aws-amplify';
import { useFocusEffect } from '@react-navigation/native';

// const screenWidth: number = Dimensions.get('screen').height;

type ShopScreenNavigationProp = StackNavigationProp<ShopStackParamList, 'Shop'>;

type Props = {
  items: VirtualItem[];
  navigation: ShopScreenNavigationProp;
};

const initialTradeItems: VirtualItem[] = [];

export default function TradingScreen(props: Props) {
  const [tradeItems, setTradeItems] = useState(initialTradeItems);

  useFocusEffect(
    React.useCallback(() => {
      forceHorizontal();
      return () => returnPortrait();
    }, [])
  );

  const forceHorizontal = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  };

  const returnPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  };

  const addToTrade = (item: VirtualItem) => {
    if (!tradeItems.includes(item)) {
      setTradeItems([...tradeItems, item]);
    }
  };

  const removeFromTrade = (item: VirtualItem) => {
    setTradeItems(tradeItems.filter((elem) => elem !== item));
  };

  return (
    <View style={style.container}>
      <View style={style.closeContainer}>
        <TouchableOpacity
          style={style.closeButton}
          onPress={() => props.navigation.goBack()}
        >
          <Image
            style={style.closeButton}
            source={require('../../assets/images/close.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={style.itemContainer}>
        <ItemList
          items={props.items}
          columns={3}
          headerComponent={() => (
            <Text style={style.itemsText}>Your Items</Text>
          )}
          onPress={(item: VirtualItem) => addToTrade(item)}
          itemSize={90}
        />
      </View>
      <View style={style.offerContainer}>
        {/* <ScrollView contentContainerStyle={{ paddingTop: 10 }}> */}
        <Text style={[style.subtitleText, { paddingTop: 10 }]}>Your Offer</Text>
        <ItemList
          items={tradeItems}
          horizontal={true}
          onPress={(item: VirtualItem) => removeFromTrade(item)}
          itemSize={90}
        />
        <Text style={style.subtitleText}>Their Offer</Text>
        <ItemList
          items={props.items}
          horizontal={true}
          onPress={(item: VirtualItem) => null}
          itemSize={90}
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
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

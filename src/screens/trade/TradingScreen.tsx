import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { VirtualItem, UserData } from '../../reducers/types';
import style from './TradingScreenStyle';
import ItemList from '../../components/item_list/ItemList';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { ShopStackParamList, TradeModalStackParamList } from '../../../types';
import * as ScreenOrientation from 'expo-screen-orientation';
import { input } from 'aws-amplify';
import { useFocusEffect } from '@react-navigation/native';
import { updateTradeSession } from '../../../functions/AWSFunctions';

// const screenWidth: number = Dimensions.get('screen').height;

type TradeScreenNavigationProp = StackNavigationProp<TradeModalStackParamList, 'Trade'>;

type Props = {
  items: VirtualItem[];
  navigation: TradeScreenNavigationProp;
  route: TradeScreenNavigationProp;
  userData: UserData;
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

  const addToTrade = async (item: VirtualItem) => {
    if (!tradeItems.includes(item)) {
      setTradeItems([...tradeItems, item]);
      await updateTradeSession(props.userData.username, props.route.params.code, item.ds_pk.split('#')[1]);
    }
  };

  const removeFromTrade = async (item: VirtualItem) => {
    setTradeItems(tradeItems.filter((elem) => elem !== item));
    await updateTradeSession(
      props.userData.username,
      props.route.params.code,
      undefined,
      item.ds_pk.split('#')[1]
    );
  };

  const acceptTrade = async () => {
    await updateTradeSession(
      props.userData.username,
      props.route.params.code,
      undefined,
      undefined,
      true,
    );
  }

  const declineTrade = async () => {
    await updateTradeSession(
      props.userData.username,
      props.route.params.code,
      undefined,
      undefined,
      undefined,
      true,
    );
  };

  console.log(props.route.params.code);

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
            onPress={() => {
              acceptTrade();
              props.navigation.pop(2)
            }}
          >
            <Text style={style.submitButtonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.submitButtonContainer}
            onPress={() => {
              declineTrade();
              props.navigation.pop(2)
            }}
          >
            <Text style={style.submitButtonText}>Decline</Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

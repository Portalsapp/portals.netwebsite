import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PortalsStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import SocialBar from '../../components/social_bar/SocialBar';
import webStyle from './PortalSelectStyle';
import mobileStyle from './PortalSelectMobileStyle';
import PortalLink from '../../components/portal_link/PortalLink';
import PortalAction from '../../components/portal_action/PortalAction';
import ItemList from '../../components/item_list/ItemList';
import { VirtualItem, Portal, BankHistory } from '../../reducers/types';
import VirtualItemButton from '../../components/virtual_item/VirtualItemButton';
import { getPortalBankHistory } from '../../../functions/AWSFunctions';
import HistoryItem from '../../components/history_item/HistoryItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '../../hooks/useNavigation';
import { nav } from 'aws-amplify';

type SelectScreenRouteProp = RouteProp<PortalsStackParamList, 'PortalSelect'>;

// const style = Platform.OS === 'web' ? webStyle : mobileStyle;
const style = mobileStyle;

type Props = {
  navigation: StackNavigationProp<PortalsStackParamList>;
  route: SelectScreenRouteProp;
};

const itemData: VirtualItem[] = [
  {
    displayName: 'item',
    pic:
      'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/peach.png',
  },
  {
    displayName: 'item',
    pic:
      'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/peach.png',
  },
  {
    displayName: 'item',
    pic:
      'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/peach.png',
  },
  {
    displayName: 'item',
    pic:
      'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/peach.png',
  },
  {
    displayName: 'item',
    pic:
      'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/peach.png',
  },
];

function PortalSelectScreen({ navigation, route }: Props) {
  const [orderActive, setOrderActive] = useState(false);
  const [portalData, setPortalData] = useState(route.params.data as Portal);
  const [transactionHistory, setTransactionHistory] = useState(
    [] as BankHistory[]
  );

  const imgSource = portalData.pic
    ? { uri: portalData.pic }
    : require('../../assets/images/fortnite.jpg');

  React.useEffect(() => {
    getTransactionHistory();
    return () => {

    };
  }, [])

  const getTransactionHistory = async () => {
    setTransactionHistory(await getPortalBankHistory(portalData.ds_pk.split('#')[1]));
  }

  const renderItem = ({ item, index }) => (
    <HistoryItem
      data={item}
      username={portalData.ds_pk.split('#')[1]}
      onLikePress={(updItem: BankHistory) => {
        const upd = [...transactionHistory];
        upd[index] = updItem;
        setTransactionHistory(upd);
      }}
      overline={index !== 0}
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons size={40} name='ios-arrow-back' color={'black'} />
      </TouchableOpacity>
      <View style={style.splashContainer}>
        <Image source={imgSource} style={style.splashImage} />
        {/* <LinearGradient
          colors={['transparent', 'rgba(85,185,243,1)']}
          style={style.splashGradient}
          start={[1, -0.5]}
          end={[1, 1]}
        > */}
        <View style={style.splashTitleContainer}>
          <Text style={style.splashTitleText}>{portalData.displayName}</Text>
          <Text style={style.splashTitleText}>10M</Text>
        </View>
        {/* </LinearGradient> */}
      </View>
      <View style={style.itemsContainer}>
        {/* <FlatList
          data={itemData}
          horizontal
          renderItem={renderItem}
          keyExtractor={itemKeyExtractor}
        /> */}
        <Text style={style.itemsTitle}>Top Items</Text>
        <ItemList
          items={itemData}
          horizontal
          onPress={() => null}
          itemSize={80}
        />
      </View>
      <View style={style.historyContainer}>
        <FlatList
          contentContainerStyle={style.historyContentContainerStyle}
          data={transactionHistory}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Shop', { data: portalData })}
          activeOpacity={0.9}
        >
          <Text style={style.buttonText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => null} activeOpacity={0.9}>
          <Text style={style.buttonText}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PortalSelectScreen;

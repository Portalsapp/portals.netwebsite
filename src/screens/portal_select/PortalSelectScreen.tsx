import React, { useState } from 'react'
import { View, Text, Image, Platform } from 'react-native'
import { PortalsStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import SocialBar from '../../components/social_bar/SocialBar';
import webStyle from './PortalSelectStyle';
import mobileStyle from './PortalSelectMobileStyle';
import PortalLink from '../../components/portal_link/PortalLink';
import PortalAction from '../../components/portal_action/PortalAction';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import { VirtualItem } from '../../reducers/types';
import VirtualItemButton from '../../components/virtual_item/VirtualItemButton';

type SelectScreenRouteProp = RouteProp<PortalsStackParamList, 'Select'>;

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
  const imgSource = route.params.data.pic
    ? { uri: route.params.data.pic }
    : require('../../assets/images/fortnite.jpg');

  React.useLayoutEffect(() => {
    /*@ts-ignore*/
    navigation.setOptions({
      headerTitle: () => (
        <View style={style.headerTitleContainer}>
          <Text style={style.headerTitleText}>{route.params.title}</Text>
        </View>
      ),
      // headerRight: () => <SocialBar socialMedia={socialMedia}/>,
    });
  }, [navigation, route]);
  // props.navigation.setOptions({ headertTitle: props.route.params.title });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={style.mainContainer}
        contentContainerStyle={style.mainContentContainer}
      >
        <View style={style.splashContainer}>
          <Image source={imgSource} style={style.mainImage} />
          <Text style={style.splashTitleText}>
            {route.params.data.displayName}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/profile.png')}
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
            />
            <Text style={style.splashSubtitleText}>10,000,000</Text>
          </View>
          <View style={style.contentListContainer}>
            <Text style={style.listTitleText}>Top Items</Text>
            <FlatList
              style={style.listStyle}
              data={itemData}
              renderItem={({ item }) => (
                <VirtualItemButton
                  size={100}
                  pic={item.pic ? item.pic : ''}
                  item={item}
                  onPress={(item: VirtualItem) => null}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
            />
          </View>
          <View style={style.contentListContainer}>
            <Text style={style.listTitleText}>Top Connections</Text>
            <FlatList
              style={style.listStyle}
              data={itemData}
              renderItem={({ item }) => (
                <VirtualItemButton
                  size={100}
                  pic={item.pic ? item.pic : ''}
                  item={item}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default  PortalSelectScreen;
import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TabTwoParamList } from '../../types';
import { NavigationStackProp } from 'react-navigation-stack';
import { RouteProp } from '@react-navigation/native';
import SocialBar from '../../components/social_bar/SocialBar';
import style from './PortalSelectStyle';
import PortalLink from '../../components/portal_link/PortalLink';
import PortalAction from '../../components/portal_action/PortalAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

type SelectScreenRouteProp = RouteProp<TabTwoParamList, 'Select'>;

type Props = {
  navigation: NavigationStackProp<{ title: string }>;
  route: SelectScreenRouteProp;
};

const socialMedia = [
  'twitter', 
  'snapchat',
  'youtube',
  'twitch'
];

const portalData: { name: string, pic: JSX.Element, selected: boolean }[] = [
  {
    name: 'Fortnite',
    pic: (
      <Image
        source={require('../../assets/images/profile.png')}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
    ),
    selected: true,
  },
  {
    name: 'Portal 2',
    pic: (
      <Image
        source={require('../../assets/images/profile.png')}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
    ),
    selected: true,
  },
  {
    name: 'Portal 3',
    pic: (
      <Image
        source={require('../../assets/images/profile.png')}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
    ),
    selected: true,
  },
];

function PortalSelectScreen({ navigation, route }: Props) {

  const [orderActive, setOrderActive] = useState(false);

  React.useLayoutEffect(() => {
    /*@ts-ignore*/
    navigation.setOptions({
      headerTitle: () => (
        <View style={style.headerTitleContainer}>
          <Text style={style.headerTitleText}>{route.params.title}</Text>
          <Text style={style.headerSubtitleText}>Epic Games</Text>
        </View>
      ),
      headerRight: () => <SocialBar socialMedia={socialMedia}/>,
    });
  }, [navigation, route]);
  // props.navigation.setOptions({ headertTitle: props.route.params.title });
  return (
    <View style={{ flex: 1 }}>
      <View style={style.mainContainer}>
        {orderActive ? 
          <PortalAction onClose={() => setOrderActive(false) }/>
          : <TouchableOpacity onPress={() => setOrderActive(true) }>
            <View style={{ padding: 10, borderRadius: 5, borderColor: 'green', borderWidth: 1 }}>
              <Text style={{ fontSize: 24, fontFamily: 'OpenSans_300Light', color: 'green' }}>Order pizza</Text>
            </View>
          </TouchableOpacity>
         }
      </View>
      <View style={style.bottomRowContainer}>
        <View>
          <View style={style.linkTitleContainer}>
            <Text style={style.linkTitle}>Connected Portals</Text>
          </View>
          <View style={style.linksContainer}>
            {portalData.map((elem) => (
              <View style={style.linkContainer}>
                <PortalLink
                  title={elem.name}
                  source={elem.pic}
                  selected={elem.selected}
                  onPress={() => {}}
                  size={50}
                  // onPress={(options: { title: string }) =>
                  //   props.navigation.navigate('Select', { title: options.title })
                  // }
                />
              </View>
            ))}
          </View>
        </View>
        <View style={style.rightContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/info.png')}
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default  PortalSelectScreen;
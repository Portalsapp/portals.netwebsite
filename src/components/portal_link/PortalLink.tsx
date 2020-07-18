import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './PortalLinkStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  NavigationScreenProp,
  NavigationState,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import { useNavigation } from '../../hooks/useNavigation';

interface NavigationParams {
  title: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

type Props = {
  source?: JSX.Element,
  title: string,
  selected: boolean,
  onPress: Function,
  navigation?: Navigation,
  size: number,
  pic?: string,
}

function PortalLink(props : Props) {
  const imgSource = props.pic
    ? { uri: props.pic }
    : require('../../assets/images/fortnite.jpg');

  // const navigation = useNavigation<NavigationParams>();
  // const {
  //   state: { params }
  // } = navigation;

  // props.navigation.setOptions({ title: params ? params.title : '' });
  return (
    <TouchableOpacity onPress={() => props.onPress({ title: props.title }) }>
      <View style={[style.container, { width: props.size * 2, height: props.size * 2} ]}>
        {/* {props.source ? props.source : null} */}
        <Image
          source={imgSource}
          style={{
            width: props.size,
            height: props.size,
            borderRadius: props.size,
          }}
        />
        <View style={style.titleContainer}>
          <Text style={[style.title, { fontSize: props.size / 4 }]}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

PortalLink.navigationOptions = {
  title: 'wowow',
}

export default PortalLink;

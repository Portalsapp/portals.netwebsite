import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PortalLink from '../../components/portal_link/PortalLink';
import style from './PortalsStyle'  
import { StackNavigationProp } from '@react-navigation/stack';
import { TabTwoParamList } from '../../types';
import Header from '../../components/header/Header';
import { useNavigation } from '../../hooks/useNavigation';

type ProfileScreenNavigationProp = StackNavigationProp<
  TabTwoParamList,
  'Select'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const portalData = [
  {
    name: 'Fortnite',
    pic: <Image source={require('../../assets/images/profile.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />,
    selected: true,
  },
  {
    name: 'Portal 2',
    pic: <Image source={require('../../assets/images/profile.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />,
    selected: true,
  },
  {
    name: 'Portal 3',
    pic: <Image source={require('../../assets/images/profile.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />,
    selected: true,
  },
];

export default function PortalsScreen(props: Props) {
  // const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Header />
      <View style={style.portalSelectContainer}>
        <View style={style.portalSelectButtonContainer}>
          <TouchableOpacity>
            <View style={style.portalSelectButton}>
              <Text style={style.portalSelectButtonText}>Fortnite</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>V</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={style.portalsArea}>
          <View style={style.portalsContainer}>
            {portalData.map((elem) => (
              <PortalLink
                title={elem.name}
                source={elem.pic}
                selected={elem.selected}
                size={100}
                onPress={(options: { title: string }) => props.navigation.navigate('Select', { title: options.title }) }
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

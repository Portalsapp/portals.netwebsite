import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PortalLink from '../../components/portal_link/PortalLink';
import style from './PortalsStyle'

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

export default function PortalsScreen() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.headerLogo}>
          <Text style={style.headerLogoText}>Portals</Text>
        </View>
        <View style={style.headerItems}>
          <Text style={style.headerItemsText}>Username</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/profile.png')}
              style={style.headerItemsImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/settings.png')}
              style={style.headerItemsImage}
            />
          </TouchableOpacity>
        </View>
      </View>
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
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

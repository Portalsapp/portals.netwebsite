import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from './HeaderStyle';
import { Auth } from 'aws-amplify';
import { UserData } from '../../reducers/types';

type Props = {
  signedIn: boolean,
  userData: UserData,
  setLoginStatus: (status: boolean) => void,
}

export default function Header(props: Props) {
  return (
    <View style={style.header}>
      <View style={style.headerLogo}>
        <Text style={style.headerLogoText}>Portals</Text>
      </View>
      <View style={style.headerItems}>
        <Text style={style.headerItemsText}>{props.userData.displayName}</Text>
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
        <TouchableOpacity
          onPress={async () => {
            await Auth.signOut();
            props.setLoginStatus(false);
          }}
        >
          <Text style={style.headerItemsText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

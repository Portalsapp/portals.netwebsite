import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './SocialBarStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  socialMedia: string[],
}

export default function SocialBar(props : Props) {
  const images : JSX.Element[] = [];
  props.socialMedia.forEach((elem) => {
    images.push(
      <View style={style.imageContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/' + elem + '.png')} style={style.socialIcon} />
        </TouchableOpacity>
      </View>
      );
  });
  return (
    <View style={style.container}>
      {images}
      <View style={style.usersContainer}>
        <Image source={require('../../assets/images/profile.png')} style={style.socialIcon}/>
        <Text style={style.usersText}>10M+</Text>
      </View>
    </View>
  )
}

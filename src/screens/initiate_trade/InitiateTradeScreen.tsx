import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import style from './InitiateTradeStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { ShopStackParamList } from '../../../types';

type ShopScreenNavigationProp = StackNavigationProp<ShopStackParamList, 'Shop'>;

type Props = {
  navigation: ShopScreenNavigationProp;
};

export default function InitiateTradeScreen(props: Props) {
  const [username, setUsername] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.closeContainer}>
          <TouchableOpacity
            style={style.closeButton}
            onPress={() => props.navigation.goBack()}
          >
            <Text style={{ fontSize: 36 }}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={style.mainContainer}>
          <Image
            source={require('../../assets/images/qr.png')}
            style={style.image}
          />
          <Text style={style.titleText}>
            Have a friend scan to start trade, or enter a portal tag:
          </Text>
          <TextInput
            style={style.textInput}
            placeholder='Portal Code'
            value={username}
            onChangeText={(username) => {
              setUsername(username);
            }}
          />
          <TouchableOpacity style={style.submitButtonContainer}
            onPress={() => props.navigation.navigate('Trade', { title: 'friend name' })}
          >
            <Text style={style.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

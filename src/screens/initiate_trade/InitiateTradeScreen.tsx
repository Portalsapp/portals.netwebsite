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
import { ShopStackParamList, TradeModalStackParamList } from '../../../types';
import { startTrade } from '../../../functions/AWSFunctions';
import { UserData } from '../../reducers/types';

type TradeModalScreenNavigationProp = StackNavigationProp<TradeModalStackParamList, 'InitiateTrade'>;

type Props = {
  navigation: TradeModalScreenNavigationProp;
  userData: UserData,
};

export default function InitiateTradeScreen(props: Props) {
  const [username, setUsername] = useState('');
  const [sessionCode, setSessionCode] = useState('');

  const startTradeSession = async () => {
    setSessionCode(await startTrade(props.userData.username));
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        {sessionCode === '' ? (
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
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={style.submitButtonContainer}
                onPress={() =>
                  // props.navigation.navigate('Trade', { title: 'friend name' })
                  startTradeSession()
                }
              >
                <Text style={style.submitButtonText}>Start New Session</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.submitButtonContainer}
                onPress={() =>
                  // props.navigation.navigate('Trade', { title: 'friend name' })
                  // startTradeSession()
                  null
                }
              >
                <Text style={style.submitButtonText}>Join Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={style.mainContainer}>
            <Text>{sessionCode}</Text>
            <TouchableOpacity
              style={style.submitButtonContainer}
              onPress={
                () =>
                  props.navigation.navigate('Trade', {
                    code: sessionCode.split('#')[1],
                  })
                // startTradeSession()
              }
            >
              <Text style={style.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

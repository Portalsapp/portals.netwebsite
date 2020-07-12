import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './PortalActionStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  onClose: Function,
}

export default function PortalAction(props: Props) {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <View>
          <Text style={style.titleText}>Order Pizza</Text>
        </View>
        <View style={style.closeButtonContainer}>
          <TouchableOpacity onPress={() => props.onClose() }>
            <View style={style.closeButtonWrapper}>
              <Text style={style.closeButtonText}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.contentContainer}>
        <Image
          source={require('../../assets/images/pizza.png')}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={require('../../assets/images/pizza.png')}
          style={{ width: 50, height: 50 }}
        />
        <Image
          source={require('../../assets/images/pizza.png')}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={style.bottomContainer}>
        <View style={style.buttonContainer}>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.buttonText}>Order Pizza</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

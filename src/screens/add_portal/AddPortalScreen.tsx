import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import style from './AddPortalStyle';
import { input } from 'aws-amplify';

export default function AddPortalScreen() {
  const [inputFlex, setInputFlex] = useState(0.5);
  const [portalCode, setPortalCode] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

    useEffect(() => {
      Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

      // cleanup function
      return () => {
        Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
      };
    }, []);

    const _keyboardDidShow = () => {
      setInputFlex(0);
    };

    const _keyboardDidHide = () => {
      setInputFlex(0.5);
    };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex: 1}}>
      {/* <View style={{ flex: 1 }}> */}
        <Camera style={{ flex: 1 }} type={type}>
          {inputFlex === 0.5 &&
          <View style={[style.outlineContainer, { flex: inputFlex }]}>
            <View style={style.outline} />
          </View>
          }
          <View style={[style.codeContainer, { flex: 1 - inputFlex }]}>
            <Text style={style.codeText}>Enter Code</Text>
            <TextInput
              style={style.textInput}
              placeholder='Portal Code'
              value={portalCode}
              onChangeText={(portalCode) => {
                setPortalCode(portalCode);
              }}
            />
            <TouchableOpacity
              style={style.submitButtonContainer}
            >
              <Text style={style.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      {/* </View> */}
    </TouchableWithoutFeedback>
  );
}

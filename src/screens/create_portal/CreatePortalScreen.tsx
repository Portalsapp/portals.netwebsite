import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import style from './CreatePortalScreenStyle'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const initialFormState = {
	displayName: '',
	pic: '',
	stripeCustomerId: '',
	dateOfBirth: '',
	address: {
    address1: '',
    address2: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
	phone: '',
	email: '',
	uid: '',
	catalog: '',
	description: '',
	splashPic: '',
	colorTheme: '',
}

export default function CreatePortalScreen() {
  const [formState, setformState] = useState(initialFormState);
  const createPortal = async () => {
    console.log(formState);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.formContainer}>
          <Text style={style.titleText}>Create New Portal</Text>
          <TextInput
            placeholderTextColor='#a1a1a1'
            style={style.textInput}
            value={formState.displayName}
            placeholder='Portal Name'
            onChangeText={(displayName) =>
              setformState({ ...formState, displayName })
            }
          />
          <TextInput
            placeholderTextColor='#a1a1a1'
            style={style.textInput}
            placeholder='Color Theme'
            value={formState.colorTheme}
            onChangeText={(colorTheme) =>
              setformState({ ...formState, colorTheme })
            }
          />
          <TouchableOpacity onPress={() => createPortal()} style={style.button}>
            <Text style={style.buttonText}>Create Portal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

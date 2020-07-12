import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, GestureResponderEvent } from 'react-native'
import style from './HomeScreenStyle';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type FormData = {
  firstName: string;
  lastName: string;
  contact?: string;
  password: string;
  dobMonth: string;
  dobDay: string;
  dobYear: string;
}

const initialAccountData: FormData = {
  firstName: '',
  lastName: '',
  contact: '',
  password: '',
  dobMonth: '1',
  dobDay: '1',
  dobYear: '2000',
}

export default function CreateAccountForm() {
  const [accountData, setAccountData] = useState(initialAccountData)

  const onSubmit = () => {
    console.log(accountData);
  }

  return (
    <View style={style.outerFormShadow}>
      <View style={style.innerFormShadow}>
        <View style={style.formBox}>
          <Text style={{ fontSize: 24, color: 'white' }}>Create Account</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TextInput
              style={[style.formInput, { marginRight: 10 }]}
              placeholder='First Name'
              value={accountData.firstName}
              onChangeText={(name) => {
                setAccountData({ ...accountData, firstName: name });
              }}
            />
            <TextInput
              style={[style.formInput, { marginLeft: 10 }]}
              placeholder='Last Name'
              value={accountData.firstName}
              onChangeText={(name) => {
                setAccountData({ ...accountData, lastName: name });
              }}
            />
          </View>
          <TextInput
            style={style.formInput}
            placeholder='Email or Phone Number'
            value={accountData.firstName}
            onChangeText={(contact) => {
              setAccountData({ ...accountData, contact });
            }}
          />
          <Text style={{ color: 'white', fontSize: 16}}>Age</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TextInput
              style={[style.formInput, { marginRight: 10, width: 100 }]}
              placeholder='Day'
              value={accountData.dobDay}
              onChangeText={(dobDay) => {
                setAccountData({ ...accountData, dobDay });
              }}
            />
            <TextInput
              style={[style.formInput, { marginLeft: 10, width: 100 }]}
              placeholder='Month'
              value={accountData.dobMonth}
              onChangeText={(dobMonth) => {
                setAccountData({ ...accountData, dobMonth });
              }}
            />
            <TextInput
              style={[style.formInput, { marginLeft: 10, width: 100 }]}
              placeholder='Year'
              value={accountData.dobYear}
              onChangeText={(dobYear) => {
                setAccountData({ ...accountData, dobYear });
              }}
            />
          </View>
          <TouchableOpacity onPress={() => onSubmit()} style={style.formSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

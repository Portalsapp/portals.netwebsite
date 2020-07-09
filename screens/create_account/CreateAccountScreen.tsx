import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import style from '../login/LoginStyle'
import client from '../../functions/AWSFunctions';
import * as mutations from '../../src/graphql/mutations';
import gql from 'graphql-tag';
import { setLoginStatus } from '../../actions/appStateActions';
import { setUserData } from '../../actions/userStateActions';
import { Auth } from 'aws-amplify';

const initialFormState = {
  fullName: '',
  displayName: '',
  dateOfBirth: '',
}

type Props = {
  signedIn: boolean,
  setLoginStatus: (status: boolean) => void,
  setUserData: (userData: { displayName: string }) => void,
}

export default function CreateAccountScreen(props : Props) {
  const [formState, setFormState] = useState(initialFormState);

  const saveMetadata = async () => {
    // Creating new account -> Set new data in database
    /*@ts-ignore*/
    const username = (await Auth.currentUserInfo()).username;
    console.log('Username', username);
    client
      .mutate({
        mutation: gql(mutations.createNewUserMetadata),
        variables: {
          input: {
            ds_pk: 'USER#' + username,
            ds_sk: '#METADATA#' + username,
            displayName: formState.displayName,
          }
        },
      })
      .then((result) => {
        console.log('Result', result);
        props.setUserData({ displayName: formState.displayName });
        props.setLoginStatus(true);
    });
  }

  return (
    <View style={style.container}>
      <View style={style.outerFormShadow}>
        <View style={style.innerFormShadow}>
          <View style={style.formBox}>
            <Text style={style.titleText}>Create Account</Text>
            <TextInput
              style={style.formInput}
              placeholder='Full Name'
              value={formState.fullName}
              onChangeText={(fullName) => {
                setFormState({ ...formState, fullName });
              }}
            />
            <TextInput
              style={style.formInput}
              placeholder='Username'
              value={formState.displayName}
              onChangeText={(displayName) => {
                setFormState({ ...formState, displayName });
              }}
            />
            <TextInput
              style={style.formInput}
              placeholder='Date of Birth'
              value={formState.dateOfBirth}
              onChangeText={(dateOfBirth) => {
                setFormState({ ...formState, dateOfBirth });
              }}
            />

            <TouchableOpacity
              onPress={() => {
                // setFormState({ ...formState, verification: true });
                // signUp(loginData.contact);
                // props.setLoginStatus(true);
                // navigation.navigate('CreateAccount');
                saveMetadata();
              }}
            >
              <View style={style.submitButtonContainer}>
                <Text style={style.submitButtonText}>
                  Create Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

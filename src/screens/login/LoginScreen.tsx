import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './LoginStyle'
import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'

import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootDrawerParamList, AuthStackParamList } from '../../../types'
import { getUserMetadata } from '../../../functions/AWSFunctions'
import { UserData } from '../../reducers/types'


type Props = {
  signedIn: boolean,
  setLoginStatus: (status: boolean) => void,
  setUserData: (userData: UserData) => void,
}

const initialLoginData = {
  contact: 'kaimihata@gmail.com',
  verification: '',
};

const initialUserState: { user : CognitoUser | null, createAccount: boolean } = {
  user: null,
  createAccount: false,
}

const initialFormState = {
  login: true,
  verification: false,
  needsToCreateAccount: false,
}


export default function LoginScreen(props: Props) {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [formState, setFormState] = useState(initialFormState);
  const [userState, setUserState] = useState(initialUserState);
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const signUp = async (
    contact: string,
  ) => {
    console.log(contact, typeof contact);
    try {
      const cognitoUser = await Auth.signUp({
        username: contact,
        // password: Date.now().toString(),
        password: 'password',
      });
      setFormState({ ...formState, needsToCreateAccount: true })
      signIn(contact, true);
      console.log('Created Account', formState.needsToCreateAccount);
    } catch (err) {
      console.log("Sign Up Error: ", err);
      try {
        signIn(contact);
      } catch (error) {
        console.log(error);
        console.log('Sign Up Error:', err);
      }
    }
  };

  const signIn = async (
    contact: string,
    createAccount = false,
  ) => {
    try {
      const cognitoUser = await Auth.signIn(contact);
      setUserState({ user: cognitoUser, createAccount });
      console.log('Signed in User:', cognitoUser, formState.needsToCreateAccount);
      setFormState({ ...formState, verification: true });
    } catch (err) {
      console.log('Sign In Error:', err);
    }
  };

  /*@ts-ignore */
  const submitVerificationCode = async (
    code: string,
    user: CognitoUser,
    createAccount = false,
  ) => {
    try {
      const cognitoUser = await Auth.sendCustomChallengeAnswer(user, code);
      console.log('Form State', formState);
      if (!formState.needsToCreateAccount && !createAccount) {
        console.log('changing with submit verification code');
        props.setLoginStatus(true);
      } else {
        navigation.navigate('CreateAccount');
      }
    } catch (err) {
      // Add handling for 3 incorrect
      console.log('Verification Error:', err);
    }
  };

  const verifyLogin = async () => {
    try {
      const data = await Auth.currentAuthenticatedUser();
      console.log(data);
      if (!formState.needsToCreateAccount) {
        console.log('changing with verify login');
        const { displayName, pic } = (await getUserMetadata(data.username));
        console.log(displayName, pic);
        props.setUserData({ displayName, pic, username: data.username });
        props.setLoginStatus(true);
      }
    } catch {
      console.log('Not logged in yet');
    }
  };

  verifyLogin();
  return (
    <View style={style.container}>
      <View style={style.outerFormShadow}>
        <View style={style.innerFormShadow}>
          <View style={style.formBox}>
            {!formState.verification ? (
              <>
                <Text style={style.titleText}>Portals Sign In</Text>
                <TextInput
                  style={style.formInput}
                  placeholder='Email or Phone Number'
                  value={loginData.contact}
                  onChangeText={(contact) => {
                    setLoginData({ ...loginData, contact });
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    // setFormState({ ...formState, verification: true });
                    signUp(loginData.contact);
                    // props.setLoginStatus(true);
                    // navigation.navigate('CreateAccount');
                  }}
                >
                  <View style={style.submitButtonContainer}>
                    <Text style={style.submitButtonText}>
                      Send Verification Code
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={style.titleText}>Verification Code</Text>
                <TextInput
                  style={style.formInput}
                  placeholder='6 Digit Verification Code'
                  value={loginData.verification}
                  onChangeText={(verification) => {
                    setLoginData({ ...loginData, verification });
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    /*@ts-ignore */
                    submitVerificationCode(loginData.verification, userState.user, userState.createAccount);
                  }}
                >
                  <View style={style.submitButtonContainer}>
                    <Text style={style.submitButtonText}>Submit Code</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

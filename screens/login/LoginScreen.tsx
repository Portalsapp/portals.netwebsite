import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './LoginStyle'
import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'


type Props = {
  signedIn: boolean,
  setLoginStatus: (status: boolean) => void,
}

const initialLoginData = {
  contact: '',
  verification: '',
};

const initialUserState: { user : CognitoUser | null } = {
  user: null,
}

const initialFormState = {
  login: true,
  verification: false,
}

export default function LoginScreen(props: Props) {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [formState, setFormState] = useState(initialFormState);
  const [userState, setUserState] = useState(initialUserState);


  const signUp = async (
    contact: string,
  ) => {
    console.log(contact, typeof contact);
    try {
      await Auth.signUp({
        username: contact,
        password: Date.now().toString(),
      });
      // signIn(contact);
    } catch (err) {
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
  ) => {
    try {
      const cognitoUser = await Auth.signIn(contact);
      setUserState(cognitoUser);
      console.log('User:', cognitoUser);
    } catch (err) {
      console.log('Sign In Error:', err);
    }
  };

  /*@ts-ignore */
  const submitVerificationCode = async (
    code: string,
    user: CognitoUser,
  ) => {
    try {
      const cognitoUser = await Auth.sendCustomChallengeAnswer(user, code);
      setFormState({ ...formState, verification: true });
    } catch (err) {
      // Add handling for 3 incorrect
      console.log('Verification Error:', err);
    }
  };

  const verifyLogin = async () => {
    try {
      const data = await Auth.currentAuthenticatedUser();
      props.setLoginStatus(true);
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
                    setFormState({ ...formState, verification: true });
                    signUp(loginData.contact);
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
                    submitVerificationCode(loginData.verification, userState);
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

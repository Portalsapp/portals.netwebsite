import React, { ChangeEvent, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './SupportScreenStyle';
import * as Linking from 'expo-linking';
import LinearGradient from 'expo-linear-gradient/build/LinearGradient';
import { TextInput } from 'react-native-gesture-handler';

export default function SupportScreen() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const submit = () => {
    Linking.openURL(
      'mailto: spencer@portals.net?subject=' + subject + '&body=' + body
    );
  };

  return (
    <LinearGradient style={style.container} colors={['#5C69AC', '#98A0CC']}>
      <View style={style.inputContainer}>
        <Text style={style.titleText}>Support</Text>
        <Text style={[style.titleText, { fontSize: 14, width: 200, marginVertical: 10, textAlign: 'center' }]}>
          If you have a question or problem regarding Portals, please fill out this email form.
        </Text>
        <TextInput
          placeholder='Subject'
          style={style.textInput}
          value={subject}
          onChangeText={(text: string) => setSubject(text)}
        />
        {/* <TextInput
          placeholder='Message'
          style={[style.textInput, { fontSize: 12 }]}
          value={body}
          blurOnSubmit={false}  
          onChangeText={(text: string) => setBody(text)}
        /> */}
        <textarea
          placeholder='Message'
          style={{
            fontFamily: 'OpenSans_300Light',
            fontSize: 14,
            width: 200,
            borderWidth: 0,
            borderBottomWidth: 1,
            backgroundColor: '#f4f4f4',
            height: 150,
            marginTop: 20,
            marginBottom: 20,
          }}
          value={body}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setBody(event.target.value)
          }
        ></textarea>
        <TouchableOpacity
          onPress={() => submit()}
          style={style.submitButtonContainer}
        >
          <Text style={style.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

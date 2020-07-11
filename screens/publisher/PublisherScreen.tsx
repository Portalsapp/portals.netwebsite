import React from 'react'
import { View, Text } from 'react-native'
import style from './PublisherScreenStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { PublisherStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

// type ProfileScreenNavigationProp = StackNavigationProp<
//   PublisherStackParamList,
//   'Select'
// >;

export default function PublisherScreen() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>Publisher</Text>
      </View>
      <View style={style.bodyContainer}>
        <View style={style.rowTitleContainer}>
          <Text style={style.rowTitle}>Portals</Text>
        </View>
        <View style={style.rowContainer}>
          <TouchableOpacity
            style={style.rowElement}
            onPress={() => navigation.navigate('CreatePortal')}
          >
            <Text style={style.rowTitle}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.rowElement}
            onPress={() => navigation.navigate('ManagePortal')}
          >
            <Text style={style.rowTitle}>Fortnite Portal</Text>
          </TouchableOpacity>
        </View>
        <View style={style.rowTitleContainer}>
          <Text style={style.rowTitle}>Businesses</Text>
        </View>
        <View style={style.rowContainer}>
          <TouchableOpacity
            style={[style.rowElement, { borderColor: 'green' }]}
          >
            <Text style={style.rowTitle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

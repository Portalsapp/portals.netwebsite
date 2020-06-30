import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from '../../components/header/Header';
import Item from '../../components/item_icon/Item';
import style from './StuffStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

const items: string[] = [
  '1', '2', '3', '4'
]

export default function StuffScreen() {
  return (
    <View style={style.container}>
      <Header />
      <View style={style.topContainer}>
        <View style={style.buttonContainer}>
          <TouchableOpacity>
            <View style={style.buttonWrapper}>
              <Text style={style.buttonText}>Trade</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.buttonWrapper}>
              <Text style={style.buttonText}>History</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.searchContainer}>
          <TouchableOpacity>
            <View style={style.searchWrapper}>
              <Image
                source={require('../../assets/images/search.png')}
                style={style.searchImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.itemsContainer}>
        {items.map((elem) => (
          <Item size={100}/>
        ))}
      </View>
    </View>
  );
}

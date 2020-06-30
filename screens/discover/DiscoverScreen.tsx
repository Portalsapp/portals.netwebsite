import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from '../../components/header/Header';
import DiscoverGroup from '../../components/discover_group/DiscoverGroup'
import style from './DiscoverStyle';

const data: {
  title: string;
  count: number;
}[] = [
  {
    title: 'Featured Portals',
    count: 5,
  },
  {
    title: 'You May Like',
    count: 5,
  },
  {
    title: 'Entertainment',
    count: 4,
  },
];

export default function DiscoverScreen() {
  return (
    <View style={style.container}>
      <Header />
      <View style={style.searchContainer}>
        <TouchableOpacity>
          <View style={style.searchWrapper}>
            <Image
              source={require('../../assets/images/search.png')}
              style={style.searchImage}
            />
            <Text style={style.searchText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.categoryContainer}>
        {data.map((elem) => 
          <DiscoverGroup 
            title={elem.title}
            count={elem.count}
          />
        )}
      </View>
    </View>
  );
}

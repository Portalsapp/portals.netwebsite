import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/header/HeaderContainer';
import DiscoverGroup from '../../components/discover_group/DiscoverGroup';
import style from './DiscoverStyle';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import gql from 'graphql-tag';
import client from '../../../functions/AWSFunctions';
import { ScrollView } from 'react-native-gesture-handler';
import { Portal, VirtualItem } from '../../reducers/types';
import ItemList from '../../components/item_list/ItemList';

type Props = {
  portals: Portal[];
};

export default function DiscoverScreen(props: Props) {
  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <Text style={style.titleText}>Collections for You</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={style.collectionButton}>
            <Text style={style.collectionButtonText}>Fortnite x Pepsi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.collectionButton}>
            <Text style={style.collectionButtonText}>Fortnite x Pepsi</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={style.collectionButton}>
            <Text style={style.collectionButtonText}>Fortnite x Pepsi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.collectionButton}>
            <Text style={style.collectionButtonText}>Fortnite x Pepsi</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.titleText}>Recommended Portals</Text>
        <ItemList
          items={props.portals as VirtualItem[]}
          horizontal={true}
          onPress={(item: VirtualItem) => null}
        />
        <Text style={style.titleText}>Popular</Text>
        <ItemList
          items={props.portals as VirtualItem[]}
          horizontal={true}
          onPress={(item: VirtualItem) => null}
        />
      </ScrollView>
    </View>
  );
}

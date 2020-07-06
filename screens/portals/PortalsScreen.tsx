import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PortalLink from '../../components/portal_link/PortalLink';
import style from './PortalsStyle'  
import { StackNavigationProp } from '@react-navigation/stack';
import { TabTwoParamList } from '../../types';
import Header from '../../components/header/HeaderContainer';
import { useNavigation } from '../../hooks/useNavigation';
import * as queries from '../../src/graphql/queries';
import gql from 'graphql-tag';
import client from '../../functions/AWSFunctions';

type ProfileScreenNavigationProp = StackNavigationProp<
  TabTwoParamList,
  'Select'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const portalData = [
  {
    name: 'Fortnite',
    pic: <Image source={require('../../assets/images/profile.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />,
    selected: true,
  },
  {
    name: 'Portal 2',
    pic: <Image source={require('../../assets/images/profile.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />,
    selected: true,
  },
  {
    name: 'Portal 3',
    pic: <Image source={require('../../assets/images/profile.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />,
    selected: true,
  },
];

const initialState : string[] = [];

export default function PortalsScreen(props: Props) {

  const [portals, setPortals] = useState(initialState);
  // const portals: string[] = [];
  console.log('b', portals === []);
  if (portals === initialState) {
    console.log('a');
    client
      .query({
        query: gql(queries.listAmplifyDataStores),
      })
      .then(
        /*@ts-ignore */
        ({ data: { listAmplifyDataStores } }) => {
          const items = listAmplifyDataStores.items;
          const p: string[] = [];
          items.forEach((item: { ds_pk: string, ds_sk: string }) => {
            if (item.ds_pk.includes("ENTITY#TestExperience") && item.ds_sk.includes("#PORTAL_CONNECTION")) {
              p.push(item.ds_sk.split('#PORTAL_CONNECTION#')[1]);
            }
          });
          setPortals(p);
          console.log(portals);
        }
    );
  }
  return (
    <View style={style.container}>
      <Header />
      <View style={style.portalSelectContainer}>
        <View style={style.portalSelectButtonContainer}>
          <TouchableOpacity>
            <View style={style.portalSelectButton}>
              <Text style={style.portalSelectButtonText}>Fortnite</Text>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>V</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={style.portalsArea}>
          <View style={style.portalsContainer}>
            {portals.map((elem: string) => (
              <PortalLink
                title={elem}
                source={portalData[0].pic}
                selected={false}
                size={100}
                onPress={(options: { title: string }) =>
                  props.navigation.navigate('Select', { title: options.title })
                }
                key={elem}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

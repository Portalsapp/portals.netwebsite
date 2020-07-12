import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
/*@ts-ignore*/
import Modal from 'modal-react-native-web';
import PortalLink from '../../components/portal_link/PortalLink';
import style from './PortalsStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabTwoParamList } from '../../../types';
import Header from '../../components/header/HeaderContainer';
import { useNavigation } from '../../hooks/useNavigation';
import * as queries from '../../graphql/queries';
import gql from 'graphql-tag';
import client from '../../../functions/AWSFunctions';
import PortalsModal from '../../components/modal/PortalsModal'
import { set } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import modalStyle from '../../components/modal/PortalsModalStyle';

type ProfileScreenNavigationProp = StackNavigationProp<
  TabTwoParamList,
  'Select'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  setModalVisbility: (modalVisible: boolean) => void,
  modalVisible: boolean,
};

const portalData = [
  {
    name: 'Fortnite',
    pic: (
      <Image
        source={require('../../assets/images/profile.png')}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
    ),
    selected: true,
  },
  {
    name: 'Portal 2',
    pic: (
      <Image
        source={require('../../assets/images/profile.png')}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
    ),
    selected: true,
  },
  {
    name: 'Portal 3',
    pic: (
      <Image
        source={require('../../assets/images/profile.png')}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
    ),
    selected: true,
  },
];

const initialState: string[] = [];

export default function PortalsScreen(props: Props) {
  const [portals, setPortals] = useState(initialState);
  const [modalVisible, setModalVisible] = useState(false);

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
          items.forEach((item: { ds_pk: string; ds_sk: string }) => {
            if (
              item.ds_pk.includes('ENTITY#TestExperience') &&
              item.ds_sk.includes('#PORTAL_CONNECTION')
            ) {
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
      {/* <PortalsModal modalVisible={modalVisible} closeModal={() => setModalVisible(false)}/> */}
      <View style={style.portalSelectContainer}>
        <View style={style.portalSelectButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              // props.setModalVisbility(true);
              setModalVisible(true);
              console.log(modalVisible);
            }}
          >
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

      <PortalsModal
        modalVisible={modalVisible}
        setModalVisbility={(visibility: boolean) => setModalVisible(visibility) }
      >
        <Text>Portals Screen</Text>
      </PortalsModal>
    </View>
  );
}

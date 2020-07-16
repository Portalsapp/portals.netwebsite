import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ListRenderItem,
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
import client, {
  getUserPortalConnections,
} from '../../../functions/AWSFunctions';
import PortalsModal from '../../components/modal/PortalsModal';
import { set } from 'react-native-reanimated';
import {
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';
import modalStyle from '../../components/modal/PortalsModalStyle';
import { UserData, Portal } from '../../reducers/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  TabTwoParamList,
  'Select'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  setModalVisbility: (modalVisible: boolean) => void;
  modalVisible: boolean;
  userData: UserData;
  portals: Portal[];
};

const portalData: Portal[] = [
  {
    displayName: 'Add Portal',
  },
];

export default function PortalsScreen(props: Props) {
  const [portals, setPortals] = useState(props.portals);
  const [modalVisible, setModalVisible] = useState(false);

  /*
   * Updates state with any portals props changes
   */
  useEffect(() => {
    if (portals !== props.portals) {
      setPortals([...portalData, ...props.portals]);
    }
  }, [props.portals]);

  /*@ts-ignore*/
  const renderItem = ({ item }) => (
    <PortalLink
      title={item.displayName}
      // source={portalData[0].pic}
      selected={false}
      size={50}
      onPress={(options: { title: string }) =>
        props.navigation.navigate('Select', {
          title: options.title,
        })
      }
    />
  );
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={style.container}>
      {/* <Header /> */}
      {/* <PortalsModal modalVisible={modalVisible} closeModal={() => setModalVisible(false)}/> */}
      {/* <View style={style.portalSelectContainer}>
        <View style={style.portalSelectButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              // props.setModalVisbility(true);
              setModalVisible(true);
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
      </View> */}
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={style.portalsArea}>
          <FlatList
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
            }}
            data={portals}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </View>

      <PortalsModal
        modalVisible={modalVisible}
        setModalVisbility={(visibility: boolean) => setModalVisible(visibility)}
      >
        <Text>Portals Screen</Text>
      </PortalsModal>
    </View>
  );
}

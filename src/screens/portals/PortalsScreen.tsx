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
import { TabTwoParamList, PortalsStackParamList } from '../../../types';
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
  PortalsStackParamList,
  'PortalSelect'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  setModalVisbility: (modalVisible: boolean) => void;
  modalVisible: boolean;
  userData: UserData;
  portals: Portal[];
  homeFeedState: 'global' | 'friends' | 'you',
};

const portalData: Portal[] = [
  {
    displayName: 'Add Portal',
  },
];

export default function PortalsScreen(props: Props) {
  const [feedState, setFeedState] = useState(props.homeFeedState);
  const [portals, setPortals] = useState(props.portals);
  const [modalVisible, setModalVisible] = useState(false);

  /*
   * Updates state with any portals/feed prop changes
   */
  useEffect(() => {
    if (portals !== props.portals) {
      setPortals(props.portals);
    }
    if (feedState !== props.homeFeedState) {
      setFeedState(props.homeFeedState);
    }
  }, [props.portals, props.homeFeedState]);

  /*@ts-ignore*/
  const renderItem = ({ item }) =>
    item.displayName === 'Add Portal' ? (
      <PortalLink
        title={item.displayName}
        // source={portalData[0].pic}
        selected={false}
        size={50}
        onPress={(options: { title: string }) =>
          props.navigation.navigate('AddPortal')
        }
        pic={'https://img.icons8.com/pastel-glyph/2x/plus.png'}
      />
    ) : (
      <PortalLink
        title={item.displayName}
        // source={portalData[0].pic}
        selected={false}
        size={50}
        onPress={(options: { title: string }) =>
          props.navigation.navigate('PortalSelect', {
            // title: options.title,
            title: item.displayName,
            data: item,
          })
        }
        pic={item.pic}
      />);
  /*@ts-ignore*/
  const keyExtractor = (item, index) => index.toString();
  return (
    <View style={style.container}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={style.portalsArea}>
          <FlatList
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
            }}
            data={[ ...portalData, ...portals]}
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

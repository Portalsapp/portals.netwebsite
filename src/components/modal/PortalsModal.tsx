import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import style from './PortalsModalStyle';
/*@ts-ignore*/
import Modal from './ModalBase';

type Props = {
  modalVisible: boolean,
  setModalVisbility: (modalVisible: boolean) => void,
};

const PortalsModal:FunctionComponent<Props> =  (props) => {
  return (
    <Modal visible={props.modalVisible} transparent={true}>
      <TouchableOpacity
        onPress={() => {
          props.setModalVisbility(false);
        }}
        style={style.outerContainer}
        activeOpacity={1}
      >
          <TouchableWithoutFeedback onPress={() => {
            props.setModalVisbility(true);
          }} style={style.modal}>
            <View style={style.modal}>
              <Text>Modal!</Text>
              {props.children}
            </View>
          </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

export default PortalsModal;

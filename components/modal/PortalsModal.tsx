import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import style from './PortalsModalStyle';
/*@ts-ignore*/
import Modal from 'modal-react-native-web';

type Props = {
  modalVisible: boolean,
  setModalVisbility: (modalVisible: boolean) => void,
};

const PortalsModal:FunctionComponent<Props> =  (props) => {
  console.log(props);
  return (
    <Modal visible={props.modalVisible} transparent={true}>
      <TouchableOpacity
        onPress={() => {
          props.setModalVisbility(false);
          console.log('outer press', props.modalVisible);
        }}
        style={style.outerContainer}
        activeOpacity={1}
      >
          <TouchableWithoutFeedback onPress={() => {
            props.setModalVisbility(true);
            console.log('inner press', props.modalVisible)
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

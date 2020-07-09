import React from 'react'
import { View, Text, Modal } from 'react-native'
import style from './PortalsModalStyle'

type Props = {
  modalVisible: boolean,
}

export default function PortalsModal(props : Props) {
  return (
    <Modal animationType='slide' visible={true}>
      <View style={style.container}>
        <Text>Modal!</Text>
      </View>
    </Modal>
  );
}

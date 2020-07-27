import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './ConnectedButtonsStyle';
import { useState } from 'react';

type Props = {
  tabs: string[];
  onPress: (() => void)[];
  initialSelected: number,
};

export default function ConnectedButtons(props: Props) {
  const [selected, setSelected] = useState(props.initialSelected);
  return (
    <View style={style.container}>
      {props.tabs.map((element, index) => {
        let tabStyle;
        if (index == 0) {
          tabStyle = style.leftTab;
        } else if (index === props.tabs.length - 1) {
          tabStyle = style.rightTab;
        } else {
          tabStyle = style.tab;
        }
        if (selected === index) {
          tabStyle = { ...tabStyle, backgroundColor: '#55b9f3' };
        }
        return (
          <TouchableOpacity
            style={tabStyle}
            key={element}
            onPress={() => {
              props.onPress[index]();
              setSelected(index);
            }}>
            <Text style={style.titleText}>{element}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

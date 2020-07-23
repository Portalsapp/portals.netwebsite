import React from 'react'
import { View, Text } from 'react-native'
import { BankHistory } from '../../reducers/types'
import style from './HistoryItemStyle'

type Props = {
  data: BankHistory,
  username: string,
}

export default function HistoryItem(props: Props) {
  return (
    <View style={style.container}>
      <Text style={style.titleText}>{(new Date(props.data.createdAt)).toDateString()}</Text>
      <View style={style.body}>
        {'USER#' + props.username !== props.data.to.ds_pk ?
          <Text style={style.bodyText}>Gave {props.data.item.displayName} to {props.data.to.displayName}</Text> :
          <Text style={style.bodyText}>Recieved {props.data.item.displayName} from {props.data.from.displayName}</Text> 
        }
      </View>
    </View>
  )
}

import { StyleSheet } from 'react-native'
const width = 70;
const borderRadius = 20;

export default StyleSheet.create({
  container: {
    // borderRadius: 10,
    // borderColor: 'blue',
    // borderWidth: 1,
    // padding: 7,
    marginBottom: 7,
    flexDirection: 'row',
    flex: 1,
  },
  leftTab: {
    borderWidth: 1,
    borderColor: '#55b9f3',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    padding: 7,
    width: width,
    textAlign: 'center',
    borderRightWidth: 0,
  },
  rightTab: {
    borderWidth: 1,
    borderColor: '#55b9f3',
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    padding: 7,
    width: width,
    textAlign: 'center',
    borderLeftWidth: 0,
  },
  tab: {
    borderWidth: 1,
    borderColor: '#55b9f3',
    padding: 7,
    width: width,
    textAlign: 'center',

    // flex: 1,
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'OpenSans_300Light',
    textAlign: 'center',
  },
});
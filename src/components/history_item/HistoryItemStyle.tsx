import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    width: screenWidth,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'OpenSans_300Light',
  },
  body: {
    flexDirection: 'row',
  },
  bodyText: {
    fontSize: 16, 
    fontFamily: 'OpenSans_300Light',
  }
});

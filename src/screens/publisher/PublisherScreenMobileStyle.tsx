import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingTop: 20,
  },
  portalButtonContainer: {
    width: (screenWidth / 2) - 20,
    height: (screenWidth / 2) - 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: (screenWidth / 2) - 60,
    height: (screenWidth / 2) - 60,
    borderWidth: 1,
    borderColor: '#a1a1a1',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'OpenSans_300Light',
  }
});

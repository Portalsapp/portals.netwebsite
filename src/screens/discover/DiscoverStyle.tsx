import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    // flex: 1,
    paddingTop: 10,
  },
  collectionContainer: {},
  collectionButton: {
    width: screenWidth / 2 - 20,
    height: 70,
    margin: 10,
    backgroundColor: '#b19cd9',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
    marginLeft: 20,
  }
});

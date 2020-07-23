import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    width: screenWidth,
    paddingHorizontal: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'OpenSans_300Light',
    color: '#545454'
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bodyText: {
    fontSize: 22, 
    fontFamily: 'OpenSans_300Light',
  },
  image: {
    width: 40,
    height: 40,
  },
  likeButtonContainer: {
    alignSelf: 'flex-end'
  }
});

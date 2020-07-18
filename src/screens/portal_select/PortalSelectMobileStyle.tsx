import { StyleSheet, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').width;

export default StyleSheet.create({
  headerTitleContainer: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerTitleText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
  },
  headerSubtitleText: {
    fontSize: 22,
    fontFamily: 'OpenSans_300Light',
  },
  mainContainer: {
    flex: 1,
  },
  mainContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  splashTitleText: {
    fontSize: 36,
    fontFamily: 'OpenSans_400Regular',
  },
  splashSubtitleText: {
    fontSize: 22,
    fontFamily: 'OpenSans_300Light',
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  contentListContainer: {
    width: '100%',
  },
  listStyle: {
    paddingLeft: 20,
    flexGrow: 0,
    width: '100%',
  },
  listTitleText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
    paddingLeft: 10,
  }
});

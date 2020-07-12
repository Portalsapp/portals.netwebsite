import { StyleSheet } from 'react-native';

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
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRowContainer: {
    flex: 0.1,
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  linkTitleContainer: {
    paddingVertical: 10,
  },
  linkTitle: {
    fontSize: 22,
    fontFamily: 'OpenSans_300Light',
  },
  linksContainer: {
    flexDirection: 'row',
  },
  linkContainer: {
    paddingHorizontal: 20,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
});
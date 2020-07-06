import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  titleContainer: {
    padding: 20,
  },
  titleText: {
    fontSize: 26,
    fontFamily: 'OpenSans_300Light',
  },
  bodyContainer: {
    alignItems: 'center',
  },
  usernameTextContainer: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  usernameText: {
    fontSize: 18,
    fontFamily: 'OpenSans_300Light',
  }
});
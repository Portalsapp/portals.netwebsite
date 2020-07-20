import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  closeContainer: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 0,
    zIndex: 10,
  },
  closeButton: {
    width: 50,
    height: 50,
  },
  mainContainer: {
    flex: 0.8,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    borderRadius: 4,
    marginVertical: 8,
    width: '80%',
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
    color: 'black',
  },
  submitButtonContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
  },
});

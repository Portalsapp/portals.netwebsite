import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  closeContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  closeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    margin: 10,
  },
  mainContainer: {
    flex: 0.8,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
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

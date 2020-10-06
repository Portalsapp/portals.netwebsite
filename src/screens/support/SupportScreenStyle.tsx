import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#f4f4f4',
    // flex: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    width: 200,
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: 'OpenSans_300Light',
    paddingVertical: 10,
  },
  titleText: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 24,
  },
  submitButtonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  submitButtonText: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 20,
  }
});

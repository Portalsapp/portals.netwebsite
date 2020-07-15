import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    padding: 20,
  },
  titleText: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 36,
  },
  textInput: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 16,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 3,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginVertical: 3,  
    textAlign: 'center'
  },
  buttonText: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 16,
  }
});

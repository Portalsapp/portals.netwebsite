import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  outlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'dashed',
  },
  codeContainer: {
    // height: screenHeight/2,
    // marginTop: screenHeight/2,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  codeText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
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

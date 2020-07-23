import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
    marginLeft: 20,
    paddingTop: 10,
  },
  offerContainer: {
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
  },
});
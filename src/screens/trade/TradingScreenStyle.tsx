import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  itemsText: {
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
    marginLeft: 20,
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
    marginLeft: 20,
    marginBottom: -30,
  },
  itemContainer: {
    flex: 0.5,
  },
  offerContainer: {
    backgroundColor: 'white',
    flex: 0.5,
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
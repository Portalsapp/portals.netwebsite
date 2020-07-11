import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  modal: {
    backgroundColor: '#f4f4f4',
    padding: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '50%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    // marginTop: '10%',
  },
});

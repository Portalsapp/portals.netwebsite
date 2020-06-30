import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    width: '50%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  titleContainer: {
    flex: 0.2,
    width: '100%',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 36,
    fontFamily: 'OpenSans_300Light',
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 48,
    fontFamily: 'OpenSans_300Light',
  },
  closeButtonWrapper: {
    padding: 10,
  },
  contentContainer: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bottomContainer: {
    flex: 0.2,
    width: '100%',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginHorizontal: 40,
  },
  button: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'OpenSans_300Light',
    color: 'green',
  }
});
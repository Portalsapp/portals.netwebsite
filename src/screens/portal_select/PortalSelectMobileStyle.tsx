import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const footerHeight = 70;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  splashContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  splashImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  splashTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(85,185,243,1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  splashTitleText: {
    fontSize: 30,
    fontFamily: 'OpenSans_600SemiBold',
    paddingHorizontal: 10,
  },
  splashGradient: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  itemsContainer: {
    flex: 0.2,
  },
  itemsTitle: {
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
    marginBottom: -10,
    marginLeft: 20,
  },
  historyContainer: {
    flex: 0.5,
  },
  historyContentContainerStyle: {
    paddingBottom: footerHeight,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    height: footerHeight,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: screenWidth / 2 - 40,
    height: '70%',
    backgroundColor: '#55b9f3',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
    color: 'white',
  },
});

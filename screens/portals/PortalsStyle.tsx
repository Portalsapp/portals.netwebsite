import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 60,
    backgroundColor: 'f4f4f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7.49,

    elevation: 20,
  },
  headerLogo: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerLogoText: {
    fontSize: 36,
    fontFamily: 'OpenSans_300Light',
  },
  headerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerItemsText: {
    fontSize: 24,
    fontFamily: 'OpenSans_300Light',
    paddingHorizontal: 20,
  },
  headerItemsImage: {
    width: 50,
    height: 50,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },

  portalSelectContainer: {
    flex: 0.15,
    justifyContent: 'center'
  },
  portalSelectButtonContainer: {
    paddingHorizontal: 40,
    flexShrink: 1,
  },
  portalSelectButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    flexShrink: 10,
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portalSelectButtonText: {
    fontSize: 36,
    fontFamily: 'OpenSans_300Light',
  },


  portalsArea: {
    flex: 0.7,
  },
  portalsContainer: {
    padding: 40,
    flexDirection: 'row',
  }
});
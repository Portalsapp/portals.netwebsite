import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});

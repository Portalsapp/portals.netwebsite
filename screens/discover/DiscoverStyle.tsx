import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 40
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImage: {
    width: 50,
    height: 50,
  },
  searchText: {
    fontSize: 22,
    fontFamily: 'OpenSans_300Light',
    paddingHorizontal: 10,
  },
  categoryContainer: {
    flex: 0.9,
    paddingRight: 40,
  },
});

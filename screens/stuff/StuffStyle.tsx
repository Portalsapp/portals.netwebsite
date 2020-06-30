import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 65,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonWrapper: {
    marginRight: 80,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#c4c4c4',
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'OpenSans_300Light',
  },
  searchContainer: {
    marginVertical: 10,
  },
  searchWrapper: {

  },
  searchImage: {
    width: 50,
    height: 50,
  },
  itemsContainer: {
    flex: 0.9,
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 20,
  }
});

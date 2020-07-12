import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginLeft: 40,
    marginTop: 20,
  },
  titleText: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 36,
  },
  bodyContainer: {
    marginLeft: 40,
  },
  rowTitleContainer: {
    marginLeft: 40,
    marginVertical: 20,
  },
  rowTitle: {
    fontFamily: 'OpenSans_300Light',
    fontSize: 28,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
  },
  rowElement: {
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 3,
    marginHorizontal: 10,
  },
});

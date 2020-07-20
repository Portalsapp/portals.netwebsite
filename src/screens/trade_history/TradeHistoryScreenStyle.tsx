import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  closeContainer: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  closeButton: {
    width: 50,
    height: 50,
  },
  mainContainer: {
    flex: 0.8,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
});
